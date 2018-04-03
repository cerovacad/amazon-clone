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
import './styles/styles.css';
import 'react-dates/initialize';


const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);
// const store = createStore(rootReducer);
store.dispatch(addBook({id:1, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 10}));
store.dispatch(addBook({id:2, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 11}));
store.dispatch(addBook({id:3, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 12}));
store.dispatch(addBook({id:4, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 13}));
store.dispatch(addBook({id:5, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 14}));
store.dispatch(addBook({id:6, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 15}));
store.dispatch(addBook({id:7, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 16}));
store.dispatch(addBook({id:8, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 17}));
store.dispatch(addBook({id:9, title: 'Ruski prozor', description: 'Afkdjsnfkjdngjkdnfjkgndjkd', hardcoverPrice: 18}));

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


