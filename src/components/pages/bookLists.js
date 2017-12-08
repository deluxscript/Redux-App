"use strict"

import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Button, Col, Well } from "react-bootstrap";

class BookLists extends React.Component{
    render() {
        console.log('Accessing: ', this.props.books);
        const bookLists = this.props.books.map(function(booksArr){
            return(
                <Col md={4}  key={booksArr.id}>
                    <Well>
                        <h1>{booksArr.Title}</h1>
                        <p>{booksArr.Description}</p>
                        <p>{booksArr.Category}</p>
                        <p>{booksArr.Price}</p>
                        <Button bsStyle='primary'>Buy Now</Button>
                    </Well>
                </Col>
            )
        })
        return (
          <div>
            <h2>Book Lists</h2>
            <Grid>
                <Row>
                    {bookLists}
                </Row>
            </Grid>
          </div>
        );
      }
}

function mapStateToProps (state)  {
    return {
        books: state.books.books
    }
}
function foo () { return 5;}
var myVar = foo;
console.log(myVar);

export default connect(mapStateToProps) (BookLists);