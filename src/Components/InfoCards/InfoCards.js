import React from "react";
import Popup from "reactjs-popup";
import MoviePopup from "../MoviePopup/MoviePopup";
import InfoCard from "../InfoCard/InfoCard";
import styleClasses from "./InfoCards.module.css";

const InfoCards = props => {
  const moviesList = props.movies.d.map(movie => (
    <Popup
      trigger={
        <div>
          <InfoCard movie={movie} />
        </div>
      }
      modal
      closeOnDocumentClick
      key={movie.id}
    >
      <MoviePopup movie={movie} />
    </Popup>
  ));
  const infoCards = (
    <div className={styleClasses.main}>
      {props.movies.d ? moviesList : null}
    </div>
  );

  return <div>{infoCards}</div>;
};
export default InfoCards;
