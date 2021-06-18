import { shopActionTypes } from "./shop.types";
import { firestore, convertCollectionToMap } from "../../firebase/firebase-utils";

export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        dispatch(fetchCollectionStart());
        const collectionRef = firestore.collection('collections');

        collectionRef.get()
        .then(snapshot => {
            const collections = convertCollectionToMap(snapshot);
            dispatch(fetchCollectionSuccess(collections));
        })
        .catch(error => {
            dispatch(fetchCollectionFailure(error.errorMessage));
        })
    }
};