import userActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = emailAndPwd => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPwd,
});

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const isUserAuthenticated = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpStart = userInfo => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userInfo,
});

export const signUpSuccess = () => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error,
});