import { call, all } from 'redux-saga/effects';

import shopSaga from './shop/shop.sagas';
import cartSaga from './cart/cart.sagas';
import userSaga from './user/user.sagas';


export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(cartSaga),
        call(shopSaga),
    ]);
}