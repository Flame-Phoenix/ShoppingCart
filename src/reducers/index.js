import productReducer from './productReducer';
import {cartReducer} from './cartReducer';
import {orderReducer} from './orderReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    productReducer,
    cartReducer,
    orderReducer
});

export default allReducers;