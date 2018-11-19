import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import './comment.css';
import Calendar from './Calendar';
// import { update } from 'immutability-helper';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
      commentData : [
        // {
        //   date: '2018-11-16 12:00',
        //   content: '댓글을 등록할 수 있습니다.'
        // }
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

  handleSelectDay = (day) => {
    this.setState({
      selectedDay: day
    })
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
        <p>이 날의 책갈피가 아직 없습니다. 새로운 책갈피를 만드시겠어요?</p>
      </div>
    )

    const commentContainer = (
      <ul className='comment-container row'>
        {mapToComponent(this.state.commentData)}
      </ul>
    )

    return (
      <div>
        <p>{this.state.selectedDay}에 기록된 책갈피입니다.</p>
        <Calendar onSelectDay={this.handleSelectDay}></Calendar>
        {(this.state.commentData.length > 0) ? commentContainer : emptyCommentContainer}
        <CommentCreate onCreate={this.handleCreate}></CommentCreate>
      </div>
    );
  }
}

export default Comment;