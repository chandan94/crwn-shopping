import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections : null,
    isFetching: null,
    errorMessage: undefined,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            }
        case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}

export default shopReducer;