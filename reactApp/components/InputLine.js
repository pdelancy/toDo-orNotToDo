import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine;
