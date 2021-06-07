import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrUser = createSelector(
    selectUser,
    user => user.currentUser,
);