"use strict"

import React from "react";
import { connect } from "react-redux";

class BookLists extends React.Component{
    render() {
        console.log('Accessing: ', this.props.books);
        const bookLists = this.props.books.map(function(booksArr){
            return(
                <div key={booksArr.id}>
                    <h1>{booksArr.Title}</h1>
                    <p>{booksArr.Description}</p>
                    <p>{booksArr.Category}</p>
                    <p>{booksArr.Price}</p>
                </div>
            )
        })
        return (
          <div>
            <h2>Book Lists</h2>
            {bookLists}
          </div>
        );
      }
}

function mapStateToProps (state)  {
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps) (BookLists);