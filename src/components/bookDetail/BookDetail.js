import React, { Component } from 'react';
import Comment from './Comment';
import Calendar from './Calendar';
import './book-detail.css';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null
    }
  }

  // 필터링
  // handleFilter = (day) => {
  //   const filteredCommentData = (
  //     this.state.commentData.filter((e) => {
  //       return e.date.indexOf(day) !== -1
  //     })
  //   )
  //   console.log(filteredCommentData);
  //   this.setState({
  //     commentData: filteredCommentData
  //   });
  // }

  // 날짜 선택
  handleSelectDay = (day) => {
    this.setState({
      selectedDay: day
    })
    // console.log(day)
    // this.handleFilter(day);
  }

  render() {
    return (
      <div>
        <div className='book-info'>
          <h3 className='book-info-title'>너무 한낮의 연애</h3>
          <p className='book-info-author'>김금희</p>
          <div className='book-info-calendar'>
            <p>{this.state.selectedDay}에 기록된 책갈피입니다.</p>
            <Calendar onSelectDay={this.handleSelectDay}></Calendar>
          </div>
        </div>
        <div className='book-comment'>
          <Comment></Comment>
        </div>
        
      </div>
    );
  }
}

export default BookDetail;