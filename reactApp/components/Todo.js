import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    
    return (
      <li>
        <button onClick = {() => this.props.xClick()}>X</button>
        <button onClick = {() => this.props.toggleClick()}>{this.props.task.completed ? 'On second thought...': 'Cross Off'}</button>
        {(this.props.task.completed) ? (<strike> {this.props.task.taskText} </strike>) : this.props.task.taskText}
      </li>
    )
  }
}

export default ToDo;
