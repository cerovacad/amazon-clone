import { ADD_TO_CART } from '../actions/cartActions';
import { REMOVE_FROM_CART } from '../actions/cartActions';
import { GET_CART} from '../actions/cartActions';

export default (state = [], action) => {
  switch(action.type){
    case GET_CART: 
      return state;
    case ADD_TO_CART:
      return [...state, action.id];
    case REMOVE_FROM_CART:
      return state.filter((id) => {
        return id !== action.id;
      })
    default:
      return state;
  }
}