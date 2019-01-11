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

  // 날짜 선택
  handleSelectDay = (day) => {
    // let year = day.getFullYear();
    let str = JSON.stringify(day).substr(1, 10);
    this.setState({
      selectedDay: str
    })
    console.log(str)
  }

  // 코멘트 생성
  // handleCreate = () => {
  //   this.setState({
  //     commentData: [
  //       ...this.state.commentData,
  //       {content: '', edittable: true}
  //     ]
  //   })
  // }

  render() {
    return (
      <div className='book-detail'>
        <div className='book-info'>
          <h3 className='book-info-title'>{this.props.bookData.title}</h3>
          <p className='book-info-author'>{this.props.bookData.author}</p>
          <div className='book-info-calendar'>
            <MyCalendar
              onSelectDay={this.handleSelectDay}></MyCalendar>
          </div>
        </div>
        <div className='book-comment'>
          <CommentList 
            date={this.state.selectedDay}
            commentData={this.props.bookData.commentData}
            onCreateComment={this.props.onCreateComment}
            onRemoveComment={this.props.onRemoveComment}
          ></CommentList>
        </div>
        
      </div>
    );

  }
}

export default BookDetail;