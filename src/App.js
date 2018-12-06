import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/bookDetail/BookDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={BookList}></Route>
          <Route path='/detail' component={BookDetail}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;