import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import './comment.css';
// import { update } from 'immutability-helper';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      commentData : [
        {
          date: '2018-11-16 12:00',
          content: '댓글을 등록할수 있습니다'
        }
      ]
    }
  }

  handleCreate = (comment) => {
    this.setState({
      commentData: [...this.state.commentData, comment]
    })
  }
  handleRemove = (key) => {
    const index = key;
    this.setState({
      commentData: [
        ...this.state.commentData.splice(index-1, 1),
        this.state.commentData[index],
        ...this.state.commentData.splice(index+1, this.state.commentData.length)
      ]
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
    return (
      <div>
        <ul className='row'>
          {mapToComponent(this.state.commentData)}
        </ul>
        <CommentCreate onCreate={this.handleCreate}></CommentCreate>
      </div>
    );
  }
}

export default Comment;
