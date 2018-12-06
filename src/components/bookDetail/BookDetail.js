import React, { Component } from 'react';
import CommentList from './CommentList';
import MyCalendar from './Calendar';
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
    console.log(day)
    // this.handleFilter(day);
  }

  render() {
    return (
      <div>
        <a className='btn btn-danger' href='/'>메인으로 이동</a>
        <div className='book-info'>
          <h3 className='book-info-title'>삼미 슈퍼스타즈의 마지막 팬클럽</h3>
          <p className='book-info-author'>박민규</p>
          <div className='book-info-calendar'>
            {/* <Calendar onSelectDay={this.handleSelectDay}></Calendar> */}
            <MyCalendar></MyCalendar>
          </div>
        </div>
        <div className='book-comment'>
          <CommentList date={this.state.selectedDay}></CommentList>
        </div>
        
      </div>
    );

  }
}

export default BookDetail;