import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import ToDoList from './TodoList';

var dummyData = [{ taskText: "Catch 'em all", completed: true },
                {taskText: 'Go to grocery store', completed: true},
                {taskText: 'Find license', completed: false},
                {taskText: 'Read a damn book', completed: false}]

class ToDoApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: this.state.todos.concat(dummyData)
    })
  }
  render() {
    return(
      <div className= 'list'>
        <InputLine />
        <ToDoList todos = {this.state.todos}/>
      </div>
    )
  }
}

export default ToDoApp;
