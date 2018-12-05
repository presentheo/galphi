import React, { Component } from 'react'
import Calendar from 'rc-calendar'
import 'rc-calendar/assets/index.css'

class MyCalendar extends Component {

  render(){
    return (
      <Calendar></Calendar>
    );
  }
  
}

export default MyCalendar;


// import React, { Component } from 'react'
// // import DayPicker from 'react-day-picker';
// // import 'react-day-picker/lib/style.css';

// import Calendar from 'rc'

// class Calendar extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       selectedDay: null
//     }
//   }

//   handleClick = (day, {selected}) => {
//     this.setState({
//       selectedDay: selected ? undefined : day
//     })
//     this.props.onSelectDay(day.toLocaleDateString());
//   }

//   render(){
//     return (
//       <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleClick}></DayPicker>
//     );
//   }
  
// }

// export default Calendar;