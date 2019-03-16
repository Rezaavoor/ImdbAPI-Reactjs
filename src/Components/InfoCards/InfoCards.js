import React from 'react';
import InfoCard from '../InfoCard/InfoCard'
import styleClasses from './InfoCards.module.css'
const InfoCards=(props)=>{
    let infoCards=null;
    infoCards=(
        <div className={styleClasses.main}>
            {props.movies.d.map((movie)=>{
                return(
                    <InfoCard movie={movie}></InfoCard>
                );
            })}
        </div>
    );
    return(
        <div>
            {infoCards}
        </div>
    );
}
export default InfoCards;