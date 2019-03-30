import React, { useState, useEffect } from "react";
import styleClasses from "./App.module.css";

import InputManager from "./Components/InputManager/InputManager";
import InfoCards from "./Components/InfoCards/InfoCards";
const App = () => {
  const [name, setName] = useState("Captain Marvel");
  const [movies, setMovies] = useState(undefined);

  const getData = async () => {
    if (name) {
      let movies = "";
      
      const CORS = "https://cors-anywhere.herokuapp.com/" // IMPORTANT!! If you are using localhost then you should somehow bypass the Allow-Control-Allow-Origin otherwise the fetch won't return anything
      const imdburl = `https://v2.sg.media-imdb.com/suggests/${name
        .toLowerCase()
        .charAt(0)}/${name}.json`; //ex: https://v2.sg.media-imdb.com/suggests/b/batman.json
      await fetch(CORS+imdburl, {headers:{"Accept":"*/*"}})
        .then(response => response.text())
        .then(contents => (movies = contents));
      movies = movies.replace("imdb$" + name.replace(" ", "_") + "(", "");
      movies = movies.substring(0, movies.length - 1); //outputting a clean Object out of the response
      try {
        setMovies(JSON.parse(movies));
      } catch (e) {
        console.log(e); //DO nothing due to an issue that appears when you delete the whole text by holding backspace
      }
    } else {
      console.clear();
      console.log("Please type the name of the movies");
    }
  };
  useEffect(() => {
    try {
      getData().then(
        console.clear(),
        movies ? console.log("id: " + movies.d[0].id) : null
      );
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  const inputChangeHandler = event => {
    const value = event.target.value;
    setName(value);
    getData();
  };
  const searchClickHandler = async () => {
    getData();
  };

  let content;
  content = (
    <div className={styleClasses.App}>
      <InputManager
        clicked={() => searchClickHandler()}
        inputChanged={event => inputChangeHandler(event)}
        name={name}
      />
      {movies ? (
        <InfoCards
          movies={movies}
          //clicked={this.movieClickHandler}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );

  return content;
};

export default App;
