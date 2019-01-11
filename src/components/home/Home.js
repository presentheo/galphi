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

  // 댓글  함수
  commentHandler = (func) => {
    this.setState({
      bookData: [
        ...this.state.bookData.slice(0, this.state.selectedBookIndex),
        {
          title: this.state.bookData[this.state.selectedBookIndex].title,
          author: this.state.bookData[this.state.selectedBookIndex].author,
          commentData: func()
        },
        ...this.state.bookData.slice(this.state.selectedBookIndex+1, this.state.bookData.length)
      ]
    })
  }

  handleCreateComment = () => {
    this.commentHandler(() => {
        return [
          ...this.state.bookData[this.state.selectedBookIndex].commentData,
          {content: '', edittable: true}
        ]
      }
    )
  }

  handleRemoveComment = (index) => {
    this.commentHandler(() => {
      let arr = this.state.bookData[this.state.selectedBookIndex].commentData;
      return [
        ...arr.slice(0, index),
        ...arr.slice(index+1, arr.length)
      ]
    })
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
                onRemoveComment={this.handleRemoveComment}/>}}/>
        </div>
      </Router>
    );
  }
}

export default Home;
