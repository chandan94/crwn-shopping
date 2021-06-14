import { shopActionTypes } from "./shop.types";

export const shopUpdateAction = collectionMap => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap,
})