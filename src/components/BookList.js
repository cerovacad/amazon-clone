import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/bookActions';
import BookItem from './BookItem';

class BookList extends Component {
  state = { books: [] }

  componentDidMount = () => {
    this.props.dispatch(getBooks());
    this.setState({
        books: this.props.books
    });
  };

  render() {
    return (
      <div>
        {this.state.books.map((book) => {
          return (
            <BookItem key={book.id} {...book}/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    books: state.books
  }
};

export default connect(mapStateToProps)(BookList);