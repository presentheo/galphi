import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import Comment from './Comment';
import CommentDate from './CommentDate';

class CommentList extends Component {

  // 코멘트 수정하고 저장
  handleSave = (key, content) => {
    console.log('saved!');
    let text = content;
    this.setState({
      commentData: [
        ...this.props.commentData.slice(0, key),
        {content: text},
        ...this.props.commentData.slice(key+1, this.props.commentData.length)
      ]
    })
  }

  render() {
    
    const mapToComponent = (data) => {
      return data.map((el, i) => {
        return (
          <Comment
            bookId={this.props.bookId}
            comment={el}
            key={i}
            commentId={i}
            onRemoveComment={() => this.props.onRemoveComment(i)}
            onSaveComment={() =>this.props.onSaveComment()}
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