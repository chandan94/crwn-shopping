import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectShopCollectionSet = collectionId => createSelector(
    [selectShopCollections],
    collections => {
        return collections[collectionId]
    }
);

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map( key => collections[key]),
)