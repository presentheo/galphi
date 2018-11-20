import React, { Component } from 'react';
// import Book from './components/book/Book';
import BookDetail from './components/bookDetail/BookDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Book></Book> */}
        <BookDetail></BookDetail>
      </div>
    );
  }
}

export default App;