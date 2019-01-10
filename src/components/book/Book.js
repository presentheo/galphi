import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  handleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  onClick = () => {
    // this.handleActive();
    this.handleClick();
  }

  render() {
    return (
      <li className='book-wrapper'>
        <Link to={`/detail/${this.props.id}`}>
          <div className='book card'>
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
