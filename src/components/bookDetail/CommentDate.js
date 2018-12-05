import React, { Component } from 'react';

class CommentDate extends Component {
  
  render() {

    const view = (
      <div className='comment-date'>
        <p>{this.props.date}에 기록된 책갈피입니다.</p>
      </div>
    )

    const empty = (
      <div className='comment-date empty'>
        <p>{this.props.date}의 책갈피가 아직 없습니다. 새로운 책갈피를 만드시겠어요?</p>
      </div>
    )
    
    return (
      <div>
        {this.props.isExist ? view : empty}
      </div>
    );
  }
}

export default CommentDate;
