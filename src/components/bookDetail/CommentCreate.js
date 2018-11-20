import React, { Component } from 'react';
// import { update } from 'immutability-helper';

class CommentCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: '',
      content: ''
    }
  }

  getNow = () => {
    const leadingZero = (num) => (num<10) ? '0'+num : num;
    const now = new Date();
    const year = now.getFullYear();
    const month = leadingZero(now.getMonth()+1);
    const date = leadingZero(now.getDate());
    const hour = leadingZero(now.getHours());
    const minute = leadingZero(now.getMinutes());

    const whatDate = `${year}. ${month}. ${date}.`;
    const whatTime = `${hour}:${minute}`;

    return `${whatDate} ${whatTime}`;
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleClick = () => {
    let comment = {
      date: this.getNow(),
      content: this.state.content
    }
    this.setState({
      date: '',
      content: ''
    })
    this.props.onCreate(comment)
  }

  handleKeypress = (e) => {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <input 
          className='form-control'
          type='text'
          placeholder='내용을 입력해주세요'
          value={this.state.content}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        ></input>
        <button className='btn btn-primary' onClick={this.handleClick}>등록</button>
        
      </div>
    );
  }
}

export default CommentCreate;

