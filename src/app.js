"use strict"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { addBook, getBooks, deleteBook, updateBook } from './actions/bookActions';
import { addToCart, removeFromCart } from './actions/cartActions';
import AppRouter from './router/AppRouter';

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);
// const store = createStore(rootReducer);
store.dispatch(addBook({id:1, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 10}));
store.dispatch(addBook({id:2, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 11}));
store.dispatch(addBook({id:3, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 12}));
store.dispatch(addBook({id:4, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 13}));
store.dispatch(addBook({id:5, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 14}));
store.dispatch(addBook({id:6, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 15}));
store.dispatch(addBook({id:7, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 16}));
store.dispatch(addBook({id:8, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 17}));
store.dispatch(addBook({id:9, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', price: 18}));

// store.dispatch(updateBook(2, {title: 'KOozare'}));
// store.dispatch(deleteBook(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(8));

// store.dispatch(removeFromCart(2));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));


