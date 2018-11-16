import React, { Component } from 'react';
import Book from './components/book/Book';
import Comment from './components/comment/Comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Book></Book>
        <Comment></Comment>
      </div>
    );
  }
}

export default App;