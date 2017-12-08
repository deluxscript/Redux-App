"use strict"

import { combineReducers } from 'redux';

//Import all reducers to be combined

import { booksReducers } from "./booksReducers";
import { cartReducers } from "./cartReducers";

//Reducers are combined here

export default combineReducers ({
    books: booksReducers,
    cart: cartReducers
})
