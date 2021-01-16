import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../API/apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieDisplay.scss";

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      const filterData = filterMovieResults(data);
      const clean = cleanMovieData(filterData);
      setMovies(clean);
    });
  }, []);

  const filterMovieResults = (rawData) => {
    return rawData.results.filter((result) => {
      return (
        result.type === "Movie" &&
        result.title.includes("Boku") &&
        result.start_date
      );
    });
  };

  const cleanMovieData = (dirtyData) => {
    return dirtyData.map((data) => {
      return {
        image_url: data.image_url,
        rated: data.rated,
        start_date: data.start_date,
        synopsis: data.synopsis,
        url: data.url,
        title: data.title,
        mal_id: data.mal_id,
      };
    });
  };

  const generateMovieThumbs = () => {
    return movies.map((movie, index) => {
      return <MovieThumb key={index} data={movie} />;
    });
  };

  return <section className="movie-section">{generateMovieThumbs()}</section>;
};

export default MovieDisplay;
