import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {

  render() {
    return (
      <li className='book-wrapper'>
        <Link to={`/detail/${this.props.id}`}>
          <div className='book card' onClick={() => this.props.onClickBook(this.props.id)}>
            <div className='card-body'>
              <h3 className='book-title'>{this.props.title}</h3>
              <p className='book-author'>{this.props.author}</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Book;
