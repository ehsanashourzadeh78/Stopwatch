import React from 'react';
import Hello from "./Hello.js";
import Timer from './Timer';
import "./style.css";

class App extends React.Component{
  render(){
    return(
      <div className='main'>
        <Hello />
        <Timer />
      </div>
    )
  }
}

export default App;