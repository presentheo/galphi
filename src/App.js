import React, { Component } from 'react';
import './App.css';
import BookList from './components/book/Book';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList></BookList>

      </div>
    );
  }
}

export default App;