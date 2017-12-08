"use strict";

//define REDUCERS
export function booksReducers (state={books: [], categories:[]}, action) {
    
        switch (action.type) {
            case "POST_BOOK":
                let books = state.books.concat(action.payload);
                //let categories = state.books.concat(action.payload.category);
                return {books};
                break;
    
            case "DELETE_BOOK":
            // Create a copy of the current array of books
                const currentBookToDelete = [...state.books]
                // Determine at which index in books array is the book to be deleted
                const indexToDelete = currentBookToDelete.findIndex(
                    function(book){
                        return book.id === action.payload.id;
                    }
                )
                //use slice to remove the book at the specified index
                return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
    
            case "UPDATE_BOOK":
            
             // Create a copy of the current array of books
             const currentBookToUpdate = [...state.books]
             // Determine at which index in books array is the book to be deleted
             const indexToUpdate = currentBookToUpdate.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
             )
             // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
             const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title }
             //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
             return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
        }
        return state;
    }