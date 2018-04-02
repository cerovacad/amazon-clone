import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartList extends Component {

  render() {
    return (
      <div>
        <h1>Cart</h1>
        {
          this.props.books.map((book) => {
            if(this.props.cart.indexOf(book.id) > -1){
              return <CartItem key={book.id} {...book}/>
            }
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    books: state.books
  }
}

export default connect(mapStateToProps)(CartList);