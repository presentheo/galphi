import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import Comment from './Comment';
import CommentDate from './CommentDate';

class CommentList extends Component {

  render() {
    
    const mapToComponent = (data) => {
      return data.map((el, i) => {
        return (
          <Comment
            comment={el}
            key={i}
            commentId={i}
            onSaveComment={(comment) => this.props.onSaveComment(i, comment)}
            onRemoveComment={() => this.props.onRemoveComment(i)}
            onEditComment={() => this.props.onEditComment(i)}
          ></Comment>
        )
      })
    }

    return (
      <div>
        <CommentDate
          date={this.props.date}
          isExist={this.props.commentData.length > 0}
        ></CommentDate>

        <ul className='comment-container row'>
          {mapToComponent(this.props.commentData)}
          <CommentCreate 
            onCreateComment={this.props.onCreateComment}
          ></CommentCreate>
        </ul>

      </div>
    );
  }
}

export default CommentList;