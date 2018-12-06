import React, { Component } from 'react';

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
      <li className='col col-sm-3'>
        <div 
          className={this.state.isActive ? 'card card-flip' : 'card'} 
          onClick={this.onClick}
        >
          <div className='card-body'>
            <h3 className='book-title'>{this.props.title}</h3>
            <p className='book-author'>{this.props.author}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
