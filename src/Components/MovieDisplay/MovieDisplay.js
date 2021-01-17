import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../API/apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieDisplay.scss";
import { filterMovieResults, cleanMovieData } from "../../utilities";

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      const filterData = filterMovieResults(data);
      const clean = cleanMovieData(filterData);
      setMovies(clean);
    });
  }, []);

  const generateMovieThumbs = () => {
    return movies.map((movie, index) => {
      return <MovieThumb key={index} data={movie} />;
    });
  };

  const display = generateMovieThumbs();

  return <section className="movie-section">{display}</section>;
};

export default MovieDisplay;
