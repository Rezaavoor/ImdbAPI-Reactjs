import React, { Component } from 'react';
import styleClasses from './App.module.css';

import InputManager from './Components/InputManager/InputManager';
import InfoCards from './Components/InfoCards/InfoCards';
class App extends Component {
  state = ({
    name: 'Captain Marvel',
    movies: undefined
  })

  getData = async () => {
    if (this.state.name) {
      let movies = "";
      // IMPORTANT!! If you are using localhost then you should somehow bypass the Allow-Control-Allow-Origin otherwise the fetch won't return anything
      const imdburl = `https://v2.sg.media-imdb.com/suggests/${this.state.name.toLowerCase().charAt(0)}/${this.state.name}.json`; //ex: https://v2.sg.media-imdb.com/suggests/b/batman.json
      await fetch(imdburl).then(response => response.text())
        .then(contents => movies = contents)
      movies = movies.replace('imdb$' + this.state.name.replace(' ', '_') + '(', '');
      movies = movies.substring(0, movies.length - 1); //outputting a clean Object out of the response
      try {
        this.setState({
          movies: JSON.parse(movies),
          loading: false
        }, () => {
          console.clear();
          console.log('id: ' + this.state.movies.d[0].id);
        })
      }
      catch (e) {
        console.log(e) //DO nothing due to an issue that appears when you delete the whole text by holding backspace
      }

    }
    else {
      console.clear();
      console.log("Please type the name of the movies");
    }
  }
  componentWillMount() {
    this.getData();
  }
 

  inputChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({
      name: value
    },
      () => { this.getData() })

  }
  searchClickHandler = async () => {
    this.getData();
  }

 

  render() {
    let content;
        content=(
          <div className={styleClasses.App}>
            <InputManager
              clicked={() => this.searchClickHandler()}
              inputChanged={(event) => this.inputChangeHandler(event)}
              name={this.state.name}>
            </InputManager>
            {this.state.movies ? (
              <InfoCards
              movies={this.state.movies}
              clicked={this.movieClickHandler}>
            </InfoCards>
            ):(
              <p>Loading</p>
            )
            }
            
          </div>
        );
    
    return (
      content
    );
  }
}

export default App;


