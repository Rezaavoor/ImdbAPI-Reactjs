import React, { Component } from 'react';
import styles from './App.module.css';
import json_file from './assets/Imdb API Sample/v2.sg.media-imdb.com/suggests/b/batman.json';

import InputManager from './Components/InputManager/InputManager';
import InfoCards from './Components/InfoCards/InfoCards';
class App extends Component {
  state = ({
    name:''
  })
  inputChangeHandler=(event,index)=>{
    this.setState({name:event.target.value});
    console.log(this.state.name);
  }
  clickHandler=()=>{
    console.log(this.state.name);
  }
  render() {
    return (
      <div className={styles.App}>
        <InputManager inputChanged={(event)=>this.inputChangeHandler(event)}></InputManager>
        <InfoCards></InfoCards>
      </div>
    );
  }
}

export default App;
