import React, { Component } from 'react';
import './comment.css';

import {autoGrow} from '../../util';

class Comment extends Component {

  constructor(props){
    super(props);

    this.state = {
      content: this.props.comment.content,
      edittable: this.props.comment.edittable
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSave = () => {
    if (this.state.content.length < 1) {
      alert('한 글자 이상 입력해주세요 :)')
    } else {
      this.props.onSaveComment({
        content: this.state.content,
        edittable: false
      });
    }
  }

  // textarea 자동 높이 조절
  handleKeyUp = (e) => {
    autoGrow(e);
  }

  render() {

    const viewer = (
      <div className='comment-content'>
        <p onClick={this.props.onEditComment}>{this.props.comment.content}</p>
      </div>
    )
    const editor = (
      <div className='comment-editor'>
        <textarea 
          className='form-control'
          onChange={this.handleChange}
          onKeyUp={(e) => this.handleKeyUp(e.target)}
          onFocus={(e) => this.handleKeyUp(e.target)}
          value={this.state.content}
          autoFocus></textarea>
        <button 
          className='btn btn-block btn-dark'
          onClick={this.handleSave}
          >저장</button>
      </div>
    )

    return (
      <li className='col-sm-4'>
        <div className='comment'>
          {this.props.comment.edittable ? editor : viewer}
          <div className='comment-menu clearfix'>
            <button className='close' onClick={this.props.onRemoveComment}>
              <span>&times;</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;