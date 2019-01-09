import React, { Component } from 'react';
import Book from './Book';
import './book.css';
import BookDetail from '../bookDetail/BookDetail';

class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: 0,
      bookData : [
        {title: '위대한 개츠비', author: 'F. 스콧 피츠제럴드'},
        {title: '설국', author: '가와바타 야스나리'},
        {title: '동물농장', author: '조지 오웰'},
        {title: '내게 무해한 사람', author: '최은영'}
      ]
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

    const detail = (
      <BookDetail
        id={this.state.selectedKey}
        book={this.state.bookData[this.state.selectedKey]}
      ></BookDetail>
    )
    
    return (
      <div>
        <ul className='row'>
          {mapToComponent(this.state.bookData)}
        </ul>

        <div>
          {detail}
        </div>
      </div>

    );
  }
}

export default BookList;
