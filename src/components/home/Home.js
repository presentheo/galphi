import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from '../book/BookList';
import BookDetail from '../bookDetail/BookDetail'
import './Home.css';

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
          title: '설국', 
          author: '가와바타 야스나리', 
          commentData: []
        },
        {
          title: '동물농장', 
          author: '조지 오웰', 
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
      <Router>
        <div>
          <Route 
            exact path='/' 
            render={
              () => {return <BookList 
                bookData={this.state.bookData}
                onClickBook={this.handleClickBook}/>}}/>
          <Route 
            exact path='/detail/:id' 
            render={
              () => {return <BookDetail 
                bookData={this.state.bookData[this.state.selectedBookIndex]}
                onCreateComment={this.handleCreateComment}
                onRemoveComment={this.handleRemoveComment}
                onEditComment={this.handleEditComment}
                onSaveComment={this.handleSaveComment}/>}}/>
        </div>
      </Router>
    );
  }
}

export default Home;
