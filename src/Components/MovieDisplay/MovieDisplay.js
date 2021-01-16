import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../API/apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieDisplay.scss";

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      const filteredResults = data.results.filter((result) => {
        return (
          result.type === "Movie" &&
          result.title.includes("Boku") &&
          result.start_date
        );
      });
      setMovies(filteredResults);
    });
  }, []);

  const generateMovieThumbs = () => {
    return movies.map((movie, index) => {
      return <MovieThumb key={index} data={movie} />;
    });
  };

  return <section className="movie-section">{generateMovieThumbs()}</section>;
};

export default MovieDisplay;
