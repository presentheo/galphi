import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
// import { update } from 'immutability-helper';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentData : [
        {
          date: '2018-11-16',
          content: '좀 별로에요'
        },
        {
          date: '2018-11-16',
          content: '좀 별로에요'
        },
        {
          date: '2018-11-16',
          content: '좀 별로에요'
        }
      ]
    }
  }

  handleCreate = (comment) => {
    this.setState({
      commentData: [...this.state.commentData, comment]
    })
  }


  render() {

    const mapToComponent = (data) => {
      return data.map((el,i) => {
        return (
          <div key={i}>{el.date}{el.content}</div>
        )
      })
    }
    return (
      <div>
        {mapToComponent(this.state.commentData)}
        <CommentCreate onCreate={this.handleCreate}></CommentCreate>
      </div>
    );
  }
}

export default Comment;
