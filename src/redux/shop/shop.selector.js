import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectShopCollectionsFetching = createSelector(
    [selectShop],
    shop => {
        return !!shop.collections
    }
);

export const selectShopCollectionSet = collectionId => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionId] : null,
);

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollections],
    collections => collections ?  Object.keys(collections).map( key => collections[key]) : [],
);