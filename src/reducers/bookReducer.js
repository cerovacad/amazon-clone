import { GET_BOOKS } from '../actions/bookActions';
import { ADD_BOOK } from '../actions/bookActions';
import { UPDATE_BOOK } from '../actions/bookActions';
import { DELETE_BOOK } from '../actions/bookActions';


export default (state = [], action) => {
  switch(action.type){
    case GET_BOOKS:
      console.log('fetching books');
      return state;
    case ADD_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      return state.map((book) => {
        if(book.id === action.id){
          return {...book, ...action.payload};
        }else{
          return book;
        }
      });
    case DELETE_BOOK:
      return state.filter((book) => {
        return book.id !== action.id;
      })
    default:
      return state;
  }
}