import React, { Component } from 'react';
// import { update } from 'immutability-helper';

class CommentCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: '',
      content: '안녕하세요!'
    }
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleClick = () => {
    let comment = {
      date: this.state.date,
      content: this.state.content
    }
    this.props.onCreate(comment)
  }

  render() {
    return (
      <div>
        <input 
          className='form-control'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        ></input>
        <button className='btn btn-primary' onClick={this.handleClick}>등록</button>
        
      </div>
    );
  }
}

export default CommentCreate;
