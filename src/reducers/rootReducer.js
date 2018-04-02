import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartRecucer from './cartReducer';

export default combineReducers({
  books: bookReducer,
  cart: cartRecucer
});