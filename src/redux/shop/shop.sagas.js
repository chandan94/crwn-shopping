import { takeLatest, put, call, all} from 'redux-saga/effects';
import { firestore, convertCollectionToMap } from '../../firebase/firebase-utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';
import { shopActionTypes } from './shop.types';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collections = yield call(convertCollectionToMap, snapshot);
        yield put(fetchCollectionSuccess(collections));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync)
}

export default function* shopSaga() {
    yield all([
        call(fetchCollectionStart),
    ]);
}