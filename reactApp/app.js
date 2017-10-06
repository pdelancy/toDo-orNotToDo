import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['Go to grocery store', 'Find license', 'Workout', 'Read a damn book']

class ToDoApp extends React.Component {

  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <InputLine />
        <ToDoList />
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
      <form>
        <input type='text' placeholder="What is on your agenda?"/>
        <input type='submit' value='Submit'/>
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
      <ul>
        {dummyData.map((task) => (<ToDo task={task}/>))}
      </ul>
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
        {this.props.task}
      </li>
    )
  }
}

ReactDOM.render(< ToDoApp />, document.getElementById('root'));
