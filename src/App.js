import React, { Component } from 'react';
import styles from './App.module.css';

import InputManager from './Components/InputManager/InputManager';
import InfoCards from './Components/InfoCards/InfoCards';
class App extends Component {
  state = ({
    name:'Captain Marvel',
    movies:undefined
  })

  getData = async () => {
    if (this.state.name){
    let movies="";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";//to bypass the error of fetching(google it!)
    const imdburl= `https://v2.sg.media-imdb.com/suggests/${this.state.name.toLowerCase().charAt(0)}/${this.state.name}.json`; //ex: https://v2.sg.media-imdb.com/suggests/b/batman.json
    await fetch(proxyurl + imdburl).then(response => response.text())
    .then(contents => movies=contents)
    movies = movies.replace('imdb$'+this.state.name.replace(' ','_')+'(',''); 
    movies= movies.substring(0,movies.length-1); //outputting a clean Object out of the response
    try{this.setState({
      movies: JSON.parse(movies)
    },()=>{
      console.clear();
      console.log(this.state.movies.d[0].l); 
    })}
    catch(e){   //DO nothing due to an issue that appears when you delete the whole text by holding backspace
    }
      
    } 
    else{
      console.clear();
      console.log("Please type the name of the movies");  
    }
  }
  componentWillMount(){
    this.getData();
  }

  inputChangeHandler=(event,index)=>{
    const value=event.target.value;
    this.setState({
      name:value
    },
      ()=>{this.getData()})
    
  }
  clickHandler=()=>{
    this.getData();
  }
  render() {
    return (
      <div className={styles.App}>
        <InputManager clicked={()=>this.clickHandler()} inputChanged={(event)=>this.inputChangeHandler(event)} name={this.state.name}></InputManager>
         {this.state.movies?(
            <InfoCards movies={this.state.movies}></InfoCards>
          ):(
            <p>hahaha</p>
          )}
      </div>
    );
  }
}

export default App;
