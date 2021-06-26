import { takeLatest, call, all, put } from "@redux-saga/core/effects";
import userActionTypes from "./user.types";

import { googleProvider, auth, createUserProfileDoc, getUserAuth } from "../../firebase/firebase-utils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure } from "./user.actions";

export function* setUserSnapshot(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDoc, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield setUserSnapshot(user, null);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield setUserSnapshot(user, null);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* checkUserAuth() {
    try {
        const userAuth = yield getUserAuth();
        if (!userAuth) {
            return;
        }
        yield setUserSnapshot(userAuth, null);
    } catch (error) {
        put(signInFailure(error));
    }
}

export function* userSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUpUser({ payload: { email, password , displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password,
        );
        yield setUserSnapshot(user,  { displayName });
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignIn() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onUserAuth() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserAuth);
}

export function* onUserSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, userSignOut);
}

export function* onUserSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser);
}

export default function* userSaga() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onUserAuth),
        call(onUserSignOut),
        call(onUserSignUp),
    ]);
}