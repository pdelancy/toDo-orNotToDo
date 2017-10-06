import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Todo'



class ToDoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div >
        To Do:
        <ul >
          {this.props.todos.map((task, index) => (<ToDo task={task} xClick={() => this.props.todoXClick(index)}/>))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
