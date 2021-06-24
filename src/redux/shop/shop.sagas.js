import { takeEvery, put, call} from 'redux-saga/effects';
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
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync)
}