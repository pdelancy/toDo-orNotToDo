import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['Go to grocery store', 'Find license', 'Workout', 'Read a damn book']


class ToDoList extends React.Component {

  render(){
    return(
      <ul>
        {dummyData.map((task) => (<ToDo task={task}/>))}
      </ul>
    )
  }
}

class ToDo extends React.Component {
  render(){
    return (
      <li>
        <button>X</button>
        {this.props.task}
      </li>
    )
  }
}

ReactDOM.render(< ToDoList />, document.getElementById('root'));
