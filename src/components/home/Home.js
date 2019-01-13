import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from '../book/BookList';
import BookDetail from '../bookDetail/BookDetail'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBookIndex: null,
      bookData : [
        {
          title: '위대한 개츠비', 
          author: 'F. 스콧 피츠제럴드', 
          commentData: []
        },
        {
          title: '그리스인 조르바', 
          author: '니코스 카잔자키스', 
          commentData: []
        },
        {
          title: '동물농장', 
          author: '조지 오웰', 
          commentData: []
        },
        {
          title: '비행운', 
          author: '김애란', 
          commentData: []
        },
        {
          title: '삼미 슈퍼스타즈의 마지막 팬클럽', 
          author: '박민규', 
          commentData: []
        },
        {
          title: '내게 무해한 사람', 
          author: '최은영', 
          commentData: []
        }
      ]
    }
  }

  handleClickBook = (index) => {
    this.setState({
      selectedBookIndex: index
    })
  }

  // 댓글 handler 함수
  commentHandler = (func, bookData, bookIndex) => {
    this.setState({
      bookData: [
        ...bookData.slice(0, bookIndex),
        {
          title: bookData[bookIndex].title,
          author: bookData[bookIndex].author,
          commentData: func(bookData[bookIndex].commentData)
        },
        ...bookData.slice(bookIndex+1, bookData.length)
      ]
    })
  }
  
  // 댓글 추가
  handleCreateComment = () => {
    this.commentHandler((commentData) => {
      return [
        ...commentData,
        {content: '', edittable: true}
      ]
    }, this.state.bookData, this.state.selectedBookIndex)
  }
  
  // 댓글 삭제
  handleRemoveComment = (commentIndex) => {
    this.commentHandler((commentData) => {
      return [
        ...commentData.slice(0, commentIndex),
        ...commentData.slice(commentIndex+1, commentData.length)
      ]
    }, this.state.bookData, this.state.selectedBookIndex)
  }
  
  // 댓글 수정
  handleEditComment = (commentIndex) => {
    this.commentHandler((commentData) => {
      return [
        ...commentData.slice(0, commentIndex),
        {content: commentData[commentIndex].content, edittable: true},
        ...commentData.slice(commentIndex+1, commentData.length)
      ]
    }, this.state.bookData, this.state.selectedBookIndex)
  }
  
  // 댓글 저장
  handleSaveComment = (commentIndex, comment) => {
    this.commentHandler((commentData) => {
      return [
        ...commentData.slice(0, commentIndex),
        comment,
        ...commentData.slice(commentIndex+1, commentData.length)
      ]
    }, this.state.bookData, this.state.selectedBookIndex)
    console.log('saved!');
  }

  render() {

    return (
      <div>
        {/* <BookList 
              bookData={this.state.bookData}
              onClickBook={this.handleClickBook}/> */}
        <Route 
          exact path='/' 
          render={
            () => {return <BookList 
              bookData={this.state.bookData}
              onClickBook={this.handleClickBook}/>}}/>
        <Route 
          path='/detail/:id' 
          render={
            () => {return <BookDetail 
              bookData={this.state.bookData[this.state.selectedBookIndex]}
              onCreateComment={this.handleCreateComment}
              onRemoveComment={this.handleRemoveComment}
              onEditComment={this.handleEditComment}
              onSaveComment={this.handleSaveComment}/>}}/>
      </div>
    );
  }
}

export default Home;
