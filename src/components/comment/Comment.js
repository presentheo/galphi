import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import './comment.css';
// import { update } from 'immutability-helper';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentData : [
        {
          date: '2018-11-16 12:00',
          content: '댓글을 등록할 수 있습니다.'
        }
      ]
    }
  }

  handleCreate = (comment) => {
    if (comment.content === '') {
      alert('내용을 입력해주세요!')
    } else {
      this.setState({
        commentData: [...this.state.commentData, comment]
      })
    }
  }
  handleRemove = (key) => {
    if (key !== null && key > -1){
      this.setState({
        commentData: [
          ...this.state.commentData.slice(0, key),
          ...this.state.commentData.slice(key+1, this.state.commentData.length)
        ]
      })
    }
  }

  render() {

    const mapToComponent = (data) => {
      return data.map((el,i) => {
        return (
          <li className='col col-sm-3' key={i}>
            <div className='comment shadow'>
              <button className='close' onClick={() => this.handleRemove(i)}>
                <span>&times;</span>
              </button>

              <div className='comment-date'>
                <span>{el.date}</span>
              </div>
              <div className='comment-content'>
                <p>{el.content}</p>
              </div>
            </div>
          </li>
        )
      })
    }

    const emptyCommentContainer = (
      <div className='comment-container empty'>
        <p>등록된 댓글이 없습니다. 새로운 댓글을 등록해주세요.</p>
      </div>
    )

    const commentContainer = (
      <ul className='comment-container row'>
        {mapToComponent(this.state.commentData)}
      </ul>
    )

    return (
      <div>
        {(this.state.commentData.length > 0) ? commentContainer : emptyCommentContainer}
        <CommentCreate onCreate={this.handleCreate}></CommentCreate>
      </div>
    );
  }
}

export default Comment;
