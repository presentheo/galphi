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

  componentDidMount(){
    this.setState({
      selectedDay: JSON.stringify(new Date()).substr(1, 10)
    })
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
    // let year = day.getFullYear();
    let str = JSON.stringify(day).substr(1, 10);
    this.setState({
      selectedDay: str
    })
    console.log(str)
  }

  render() {
    return (
      <div className='book-detail'>
        <div className='book-info'>
          <h3 className='book-info-title'>{this.props.book.title}</h3>
          <p className='book-info-author'>{this.props.book.author}</p>
          <div className='book-info-calendar'>
            <MyCalendar
              onSelectDay={this.handleSelectDay}></MyCalendar>
          </div>
        </div>
        <div className='book-comment'>
          <CommentList 
            bookId={this.props.book.id} 
            date={this.state.selectedDay}
            commentData={this.props.commentData}
          ></CommentList>
        </div>
        
      </div>
    );

  }
}

export default BookDetail;