import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import ToDoList from './TodoList';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

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
    this.state.todos
    this.setState({
      todos: this.state.todos.concat(dummyData)
    })
  }

  addTodo(e, str){
    var self = this;

    e.preventDefault();
    // console.log(e.target.value)
    // dummyData = dummyData.concat({taskText: str, completed: false});
    // this.setState({todos: dummyData});

    axios.post(dbUrl + '/add', {taskText: str})
    .then(function (response) {
      // Do whatever you want with the request's response in here
      console.log(response.data);
      console.log(self.state.todos)
      self.setState({ todos: self.state.todos.concat(response.data)});
      console.log(self.state.todos)
      console.log(response)
    })
    .catch(function (error) {
      // Do whatever you want in the event of an error in here
      console.log(error)
    });
  }

  removeTodo(index){
    dummyData = dummyData.slice(0, index).concat(dummyData.slice(index+1, dummyData.length));
    this.setState({todos: dummyData})
  }

  toggleTodo(index){
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({todos: dummyData})
  }

  render() {
    return(
      <div className= 'list'>
        <InputLine submit={this.addTodo.bind(this)}/>
        <ToDoList todos = {this.state.todos}
          todoXClick={this.removeTodo.bind(this)}
          todoToggle={this.toggleTodo.bind(this)}
        />
      </div>
    )
  }
}

export default ToDoApp;
