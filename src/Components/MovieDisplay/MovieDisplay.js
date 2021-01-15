import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../APIcalls";
import "./MovieDisplay.scss";

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      const filteredResults = data.results.filter((result) => {
        return result.type === "Movie" && result.title.includes("Boku");
      });
      setMovies(filteredResults);
    });
  }, []);

  console.log(movies);


  return <h1>Yooo</h1>;
};

export default MovieDisplay;