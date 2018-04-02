import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class BookItem extends Component {
  state = { isAddedToCart: null }

  componentDidMount = () => {
    if(this.props.cart.indexOf(this.props.id) > -1){
      this.setState({
        isAddedToCart: true
      })
    }
  }

  handleAddToCart = () => {
    this.props.dispatch(addToCart(this.props.id));
    this.setState({ isAddedToCart: true });
  }

  render() {
    return (
      <div className='book-item'>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <h4>{this.props.price}$</h4>
        <button>Buy now</button>
        {!!this.state.isAddedToCart ?  
          (<span>Added to cart</span>) :
          (<button onClick={this.handleAddToCart}>Add to cart</button>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(BookItem);