import React, { Component } from 'react';

class BookInfo extends Component {

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

  render() {
    return (
      <li className='col col-sm-3'>
        <div className={this.state.isActive ? 'card card-flip' : 'card'} onClick={this.handleActive}>
          <div className='card-body'>
            <p className='card-title'>{this.props.title}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default BookInfo;
