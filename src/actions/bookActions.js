export const GET_BOOKS = 'GET BOOKS'
export const ADD_BOOK = 'ADD BOOK'
export const UPDATE_BOOK = 'UPDATE BOOK'
export const DELETE_BOOK = 'DELETE BOOK'

export const getBooks = () => {
  return {
    type: GET_BOOKS,
  }
}

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: {...book}
  }
}

export const updateBook = (id, updates) => {
  return {
    type: UPDATE_BOOK,
    id,
    payload: {...updates}
  }
}

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    id
  }
}