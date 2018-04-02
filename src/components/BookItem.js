import React, { Component } from 'react';

class BookItem extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <h4>{this.props.price}$</h4>
        <button>Buy now</button>
        <button>Add to cart</button>
      </div>
    );
  }
}

export default BookItem;