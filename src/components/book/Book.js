import React, { Component } from 'react';
// import './Book.css';

class BookList extends Component {
  render() {
    const books = [
      {id: 1, title: 'The Great Gatsby'},
      {id: 2, title: 'Farewell to Arms'}
    ]

    return (
      <div>
        {books.map((e, i) => 
          <div className="book" key={i}>
            <h2>{e.id}</h2>
            <h3>{e.title}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default BookList;