import React from 'react';
import ReactDOM from 'react-dom';

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

class InputLine extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form className= 'todoInput'>
        <input className='inputText' type='text' placeholder="What is on your agenda?"/>
        <input className='submitInput' type='submit' value='Submit'/>
      </form>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div >
        To Do:
        <ul >
          {dummyData.map((task) => (<ToDo task={task}/>))}
        </ul>
      </div>
    )
  }
}

class ToDo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){



    return (
      <li>
        <button>X</button>
        {(this.props.task.completed) ? (<strike> {this.props.task.taskText} </strike>) : this.props.task.taskText}
      </li>
    )
  }
}

ReactDOM.render(< ToDoApp />, document.getElementById('root'));
