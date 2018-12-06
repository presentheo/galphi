import React, { Component } from 'react';
import BookList from '../book/BookList';
// import BookDetail from '../bookDetail/BookDetail'
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <BookList></BookList>
        {/* <BookDetail></BookDetail> */}
      </div>
    );
  }
}

export default Home;
