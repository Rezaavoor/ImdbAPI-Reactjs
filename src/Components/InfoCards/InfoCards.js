import React from 'react';
import Popup from 'reactjs-popup';
import MoviePopup from '../MoviePopup/MoviePopup';
import InfoCard from '../InfoCard/InfoCard'
import styleClasses from './InfoCards.module.css'


const InfoCards = (props) => {

  let infoCards = null;
  infoCards = (
    <div className={styleClasses.main}>
      {props.movies.d.map((movie) => {
        return (
          <Popup
            trigger={
              <div>
                <InfoCard movie={movie}></InfoCard>
              </div>}
              modal
              closeOnDocumentClick>
            <MoviePopup movie={movie}></MoviePopup>
          </Popup>
        );
      })}
    </div>
  );
  return (
    <div>
      {infoCards}
    </div>
  );
}
export default InfoCards;