"use strict"
import {createStore} from 'redux';

//define REDUCERS
const reducer = function(state=[], action){

    switch (action.type) {
        case "POST_BOOK":
            let books = state.concat(action.payload);
            return books;
            break;
    }
    return state;
}

//create the store
const store = createStore(reducer);

store.subscribe( function(){
    console.log('current state is: ', store.getState());
    // console.log('current Price of third state is: ', store.getState()[2].Price);
})

store.dispatch({
    type:"POST_BOOK",
    payload: [{
        id: 1,
        Title: "First Title",
        Description: "Description for first title of this shit",
        Price: 452.21
    },
    {
        id: 2,
        Title: "Second Title",
        Description: "Description for Second title of this shit",
        Price: 52.99
    },
    {
        id: 3,
        Title: "Third Title",
        Description: "Description for Third title of this shit",
        Price: 0.99
    }
    ]
})


//Adding another action
store.dispatch({
    type:"POST_BOOK",
    payload: {
        id: 4,
        Title: "Fourth Title",
        Description: "Description for fourth title of this shit",
        Price: 499.21
    }
})