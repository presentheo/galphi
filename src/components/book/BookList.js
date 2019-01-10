import React, { Component } from 'react';
import Book from './Book';
import './book.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 0
    }
  }

  handleClick = (key) => {
    this.setState({
      selectedKey: key
    })
    console.log(key)
  }

  render() {
    const mapToComponent = (data) => {
      return data.map((book, index) => {
        return (
          <Book
            id={index}
            key={index}
            title={book.title}
            author={book.author}
            onClick={this.handleClick}
          ></Book>
          )   
        }
      )
    }
    
    return (
      <div className='book-list-wrapper'>
        <ul className='book-list'>
          {mapToComponent(this.props.bookData)}
        </ul>
      </div>
    );
  }
}

export default BookList;
