import React, { Component } from 'react';
import Book from './Book';
import './book.css';

class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: -1,
      bookData : [
        {title: '위대한 개츠비', star: 5},
        {title: '설국', star: 5},
        {title: '동물농장', star: 5},
        {title: '1984', star: 5},
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
      return data.map((el, i) => {
        return (
          <Book
            id={i}
            key={i}
            title={el.title}
            star={el.star}
          ></Book>
          )   
        })
      }
      
      return (
        <div>
          <ul className='row'>
            {mapToComponent(this.state.bookData)}
          </ul>
          <a className='btn btn-success' href='/detail'>디테일로 이동</a>
        </div>
    );
  }
}

export default BookList;
