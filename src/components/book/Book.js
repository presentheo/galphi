import React, { Component } from 'react';
import BookInfo from './BookInfo';
import {Button} from 'reactstrap';
import './book.css';

class Book extends Component {

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
          <BookInfo
            id={i}
            key={i}
            title={el.title}
            star={el.star}
          ></BookInfo>
          )   
        })
      }
      
      return (
        <div>
          <ul className='row'>
            {mapToComponent(this.state.bookData)}
          </ul>
          <Button>Hello!</Button>
        </div>
    );
  }
}

export default Book;
