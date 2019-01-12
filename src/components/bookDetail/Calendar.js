import React, { Component } from 'react'
import Calendar from 'rc-calendar'
import 'rc-calendar/assets/index.css'

class MyCalendar extends Component {

  render(){
    return (
      <Calendar 
        showToday={false}
        showDateInput={false}
        onSelect={(date) => {this.props.onSelectDay(date)}}></Calendar>
    );
  }
  
}

export default MyCalendar;
