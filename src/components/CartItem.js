import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';


class CartItem extends Component {
  state = {  }

  handleRemoveFromCart = () => {
    this.props.dispatch(removeFromCart(this.props.id));
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.price}</h4>
        <button onClick={this.handleRemoveFromCart}>Remove from cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartItem);