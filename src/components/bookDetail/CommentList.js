import React, { Component } from 'react';
import CommentCreate from './CommentCreate';
import Comment from './Comment';
// import { update } from 'immutability-helper';

class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentData : [
        // {
        //   edittable: false,
        //   content: 'good'
        // },
        // {
        //   edittable: false,
        //   content: 'bad'
        // }
      ]
    }
  }

  // 새로운 코멘트 등록
  // handleCreate = (comment) => {
  //   if (comment.content === '') {
  //     alert('내용을 입력해주세요!')
  //   } else {
  //     this.setState({
  //       commentData: [...this.state.commentData, comment]
  //     })
  //   }
  // }

  // 코멘트 삭제
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

  // 코멘트 수정하고 저장
  handleSave = (key, content) => {
    console.log('saved!');
    let text = content;
    this.setState({
      commentData: [
        ...this.state.commentData.slice(0, key),
        {content: text},
        ...this.state.commentData.slice(key+1, this.state.commentData.length)
      ]
    })
  }

  // 새로운 코멘트 생성
  handleCreate = () => {
    this.setState({
      commentData: [
        ...this.state.commentData, {content: '', edittable: true}
      ]
    })
  }

  render() {
    
    const mapToComponent = (data) => {
      return data.map((el, i) => {
        return (
          <Comment
            comment={el}
            key={i}
            id={i}
            onRemove={this.handleRemove}
            onSave={this.handleSave}
          ></Comment>
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
        {(this.state.commentData.length > 0) ? commentContainer : emptyCommentContainer}
        <CommentCreate 
          onCreate={this.handleCreate}
        ></CommentCreate>
      </div>
    );
  }
}

export default CommentList;