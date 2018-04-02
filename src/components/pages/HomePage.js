import React, { Component } from 'react';
import BookList from '../BookList';

class HomePage extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <BookList/>
      </div>
    );
  }
}

export default HomePage;