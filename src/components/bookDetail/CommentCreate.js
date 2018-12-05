import React, { Component } from 'react';
// import { update } from 'immutability-helper';

class CommentCreate extends Component {

  handleClick = () => {
    this.props.onCreate();
  }

  render() {
    return (
      <div className='comment-create'>
        <button
          className='btn btn-block btn-primary mx-auto'
          onClick={this.handleClick}
        >새로운 코멘트 등록</button>
      </div>
    );
  }
}

export default CommentCreate;

