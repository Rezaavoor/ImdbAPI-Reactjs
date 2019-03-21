import React, { useState, useEffect } from 'react';
import styleClasses from './MoviePopup.css';

import scraper from './scraper'

const MoviePopup = (props) => {
    const [movieData, setMovieData] = useState('');
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        //await scraper()
        const imdburl = `https://www.imdb.com/title/${props.movie.id}`;
        setMovieData(
            await fetch(imdburl).then(response => {
                setLoading(true)
                return (
                    response.text()
                )
            })
        )
        setLoading(false)
    }

    useEffect(() => {
        (getData())
    }, [])
    let contents = null
    if (loading) contents = (
        <p>Loading</p>
    )
    else contents = (
        <p>{movieData}</p>
    )
    return (
        contents
    );
}
export default MoviePopup;

















