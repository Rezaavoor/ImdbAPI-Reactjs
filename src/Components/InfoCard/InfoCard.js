import React from 'react';
import styleClasses from './InfoCard.module.css';

const InfoCard =(props)=>{
    return(
        <div className={styleClasses.card}>
            <img src={props.movie.i} alt="Poster"></img>
            <div className={styleClasses.container}>
                <h4><b>{props.movie.l}</b>{props.movie.y}</h4>
                <p>{props.movie.s}</p>
            </div>
        </div>
    );
}
export default InfoCard;