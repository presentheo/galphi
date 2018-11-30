import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {

  constructor(props){
    super(props);

    this.state = {
      edittable: false,
      date: this.props.comment.date,
      content: this.props.comment.content
    }
  }

  handleClick = () => {
    this.setState({
      edittable: true
    })
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSave = () => {
    this.props.onSave(this.state.content);
    this.setState({
      edittable: false
    })
  }

  render() {

    const viewer = (
      <div className='comment-content'>
        <p 
          onClick={this.handleClick}>{this.props.comment.content}</p>
      </div>
    )
    const editor = (
      <div className='comment-editor'>
        <textarea 
          className='form-control'
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <button 
          className='btn btn-primary'
          onClick={this.handleSave}>저장</button>
      </div>
    )

    return (
      <li className='comment shadow'>
        <button className='close' onClick={() => {this.props.onRemove(this.props.id)}}>
          <span>&times;</span>
        </button>

        <div className='comment-date'>
          <span>{this.props.comment.date}</span>
        </div>
        {this.state.edittable ? editor : viewer}
      </li>
    );
  }
}

export default Comment;