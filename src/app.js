"use strict";

import React from "react";
import { render } from "react-dom";
import BookLists from "./components/pages/bookLists"

//Connect React to Redux
import { Provider } from "react-redux";

import { applyMiddleware,createStore } from 'redux';
import logger from "redux-logger";

//Import reducers
import reducers from "./reducers/index";

//Import Actions
import { addToCart } from "./action/cartAction";
import { postBooks, deleteBooks, updateBooks } from "./action/bookAction";

//create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
    <Provider store={store}>
        <BookLists />
    </Provider>, document.getElementById('app')
)
//Create a book
store.dispatch(postBooks([
    {
        id: 1,
        Title: "First Title",
        Description: "Description for first title of this shit",
        Category: "Action",
        Price: 452.21
    },
    {
        id: 2,
        Title: "Second Title",
        Description: "Description for Second title of this shit",
        Category: "Fiction",
        Price: 52.99
    },
    {
        id: 3,
        Title: "Third Title",
        Description: "Description for Third title of this shit",
        category: "Romance",
        Price: 0.99
    },
    {
        id: 4,
        Title: "Fourth Title",
        Description: "Description for fourth title of this shit",
        Category: "War",
        Price: 499.21
    },
    {
        id: 5,
        Title: "Fifth Title",
        Description: "Description for fifth title of this shit",
        Category: "Comedy",
        Price: 50 
    }
]));

//Delete a book
// store.dispatch(deleteBooks(
//     {
//         id: 3
//     }
// ));

// // UPDATE a book
// store.dispatch(updateBooks(
//     {
//         id: 2,
//         Title:'Learn React in 24h'
//     }
// ));

// //Cart Actions
// store.dispatch(addToCart([{id: 1}]));