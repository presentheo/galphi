import React, { Component } from 'react';
import Book from './Book';
import './book.css';

class BookList extends Component {

  render() {
    const mapToComponent = (data) => {
      return data.map((book, index) => {
        return (
          <Book
            id={index}
            key={index}
            title={book.title}
            author={book.author}
            onClickBook={this.props.onClickBook}
          ></Book>
          )   
        }
      )
    }
    
    return (
      <div>
        <div className='main-visual-wrapper'>
          <div className='main-visual'>
            <h1 className='main-logo'>갈피;</h1>
            <p>매일매일 독서 일기장</p>
          </div>
        </div>
        <div className='book-list-wrapper'>
          <ul className='book-list'>
            {mapToComponent(this.props.bookData)}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookList;
