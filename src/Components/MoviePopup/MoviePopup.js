import React, { useState, useEffect } from "react";

import styleClasses from "./MoviePopup.module.css";
import { BarLoader } from "react-css-loaders";

import scraper from "./scraper";

import starImage from "../../assets/images/starImage.jpg";
import arrowImage from "../../assets/images/arrowImage.png";

const MoviePopup = props => {
  const [movieData, setMovieData] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setMovieData(
      await scraper(props.movie.id).then(response => {
        setLoading(true);
        return response;
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  let contents = null;
  if (loading) contents = <BarLoader />;
  else
    contents = (
      <div className={styleClasses.main}>
        <div className={styleClasses.info}>
          <div className={styleClasses.content}>
            <div className={styleClasses.contentTitle}>{movieData.Title}</div>
            <div className={styleClasses.contentDescription}>
              {movieData.Plot}
            </div>
            <div className={styleClasses.contentDetail}>
              <p>
                <span>{`${movieData.Year} | ${movieData.Genre} | `}</span>
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={starImage}
                    alt="poster"
                  />
                </span>
                <span>{`${movieData.imdbRating}`}</span>
              </p>
            </div>
          </div>
          <div className={styleClasses.image}>
            <img src={movieData.Poster} alt="Poster" />
          </div>
        </div>
        <div className={styleClasses.moreInfo}>
          <img
            src={arrowImage}
            style={{ marginRight: "50px", height: "30px", width: "30px" }}
            alt="poster"
          />
        </div>
      </div>
    );

  return contents;
};
export default MoviePopup;

const personObject = {
  "@context": "http://schema.org",
  "@type": "Person",
  url: "/name/nm0000115/",
  name: "Nicolas Cage",
  image:
    "https://m.media-amazon.com/images/M/MV5BZmRlOTBlZWItMzE4Mi00YTUzLTgwYzAtY2U1ZDJlMjJlODU4XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_.jpg",
  jobTitle: ["Actor", "Producer", "Soundtrack"],
  description:
    "Nicolas Cage was born Nicolas Kim Coppola in Long Beach, California, the son of comparative literature professor August Coppola (whose brother is director Francis Ford Coppola) and dancer/choreographer Joy Vogelsang. He is of Italian (father) and Polish, German, and English (mother) descent. Cage changed his name early in his career to make his ...",
  birthDate: "1964-01-07"
};

const moiveObject = {
  "@context": "http://schema.org",
  "@type": "TVSeries",
  url: "/title/tt0944947/",
  name: "Game of Thrones",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_.jpg",
  genre: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
  contentRating: "TV-MA",
  actor: [
    {
      "@type": "Person",
      url: "/name/nm3592338/",
      name: "Emilia Clarke"
    },
    {
      "@type": "Person",
      url: "/name/nm0227759/",
      name: "Peter Dinklage"
    },
    {
      "@type": "Person",
      url: "/name/nm3229685/",
      name: "Kit Harington"
    },
    {
      "@type": "Person",
      url: "/name/nm0372176/",
      name: "Lena Headey"
    }
  ],
  creator: [
    {
      "@type": "Person",
      url: "/name/nm1125275/",
      name: "David Benioff"
    },
    {
      "@type": "Person",
      url: "/name/nm1888967/",
      name: "D.B. Weiss"
    },
    {
      "@type": "Organization",
      url: "/company/co0008693/"
    },
    {
      "@type": "Organization",
      url: "/company/co0335036/"
    },
    {
      "@type": "Organization",
      url: "/company/co0167350/"
    },
    {
      "@type": "Organization",
      url: "/company/co0231672/"
    },
    {
      "@type": "Organization",
      url: "/company/co0343278/"
    }
  ],
  description:
    "Game of Thrones is a TV series starring Emilia Clarke, Peter Dinklage, and Kit Harington. Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of...",
  datePublished: "2011-04-17",
  keywords: "dragon,based on novel,politics,queen,incest",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingCount: 1425237,
    bestRating: "10.0",
    worstRating: "1.0",
    ratingValue: "9.5"
  },
  review: {
    "@type": "Review",
    itemReviewed: {
      "@type": "CreativeWork",
      url: "/title/tt0944947/"
    },
    author: {
      "@type": "Person",
      name: "erichcohen"
    },
    dateCreated: "2019-02-05",
    inLanguage: "English",
    name: "Lives up to the hype and then some!",
    reviewBody:
      "What can be said that hasn\u0027t already been said about this show? Quite frankly, it\u0027s the greatest TV series ever created. Movie quality acting, set design, storytelling, cinematography, costumes....the one knock is in some of the early episodes CGI not being up to par (dragons mostly).\n\nThe show is brilliant in almost every way. Never before have I been as surprised by the outcome and been along for an unpredictable ride of what happens and what is to come.\n\nMy previous all time favorite show was Breaking Bad and there\u0027s a wide gap between GOT and pretty much anything else already out there. The word epic is thrown around too often these days as are 10\u0027s for anything that\u0027s halfway decent. GOT is as worthy as anything else being labeled as epic and deserves a 10 in an imperfect grading system.",
    reviewRating: {
      "@type": "Rating",
      worstRating: "1",
      bestRating: "10",
      ratingValue: "10"
    }
  },
  trailer: {
    "@type": "VideoObject",
    name: "Season 8 Official Trailer",
    embedUrl: "/video/imdb/vi3191978521",
    thumbnail: {
      "@type": "ImageObject",
      contentUrl:
        "https://m.media-amazon.com/images/M/MV5BMTg4ZTA4YzgtZGQ1YS00YTEyLTgwM2UtNzIwNGY0MjQ4YjgxXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
    },
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg4ZTA4YzgtZGQ1YS00YTEyLTgwM2UtNzIwNGY0MjQ4YjgxXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
    description: 'Watch the trailer for the final season of "Game of Thrones."',
    uploadDate: "2019-03-05T16:13:36Z"
  }
};
