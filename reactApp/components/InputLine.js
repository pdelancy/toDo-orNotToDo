import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './TodoApp';

class InputLine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit(e){
    this.props.submit(e, this.state.typedText);
    this.setState({
      typedText: ''
    })
  }
  render(){

    return (
      <div className= 'todoInput'  >
        <textarea className='inputText' type='text' onChange = {(e) => this.handleTyping(e)} value={this.state.typedText} placeholder="What is on your agenda?" />
        <button className='submitInput' onClick = {(e) => this.handleSubmit(e)}> Submit</button>
      </div>
    )
  }
}

export default InputLine;
