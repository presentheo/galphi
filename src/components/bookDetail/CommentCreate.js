import React, { Component } from 'react';
// import { update } from 'immutability-helper';

class CommentCreate extends Component {

  render() {
    return (
      <li className='col-sm-4'>
        <div className='comment comment-create'>
          <button
            className='btn btn-block btn-primary mx-auto'
            onClick={this.props.onCreateComment}
          >새로운 책갈피 추가</button>
        </div>
      </li>
    );
  }
}

export default CommentCreate;
