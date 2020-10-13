import productReducer from './productReducer';
import {cartReducer} from './cartReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    productReducer,
    cartReducer
});

export default allReducers;