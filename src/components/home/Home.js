import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from '../book/BookList';
import BookDetail from '../bookDetail/BookDetail'
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData : [
        {title: '위대한 개츠비', author: 'F. 스콧 피츠제럴드'},
        {title: '설국', author: '가와바타 야스나리'},
        {title: '동물농장', author: '조지 오웰'},
        {title: '내게 무해한 사람', author: '최은영'}
      ],
      commentData: []
    }
  }

  render() {

    return (
      <Router>
        <div>
          <div className='main-visual-wrapper'>
            <div className='main-visual'>
              <h1 className='main-logo'>갈피 </h1>
              <p>매일매일 독서 일기장</p>
            </div>
          </div>
          <Route exact path='/' render={() => {return <BookList bookData={this.state.bookData}/>}}/>
          <Route exact path='/detail:id' render={() => {return <BookDetail commentData={this.state.commentData}/>}}/>
        </div>
      </Router>
    );
  }
}

export default Home;
