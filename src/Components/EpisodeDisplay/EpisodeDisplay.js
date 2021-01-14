import React, { useEffect, useState } from "react";
import { fetchSeasons, fetchMovies } from "../../APIcalls";
import { Link, useParams } from "react-router-dom";
import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";

const EpisodeDisplay = () => {
  let { season } = useParams();

  const determineFetch = (url) => {
    switch (url) {
      case "season1":
        return "31964";
      case "season2":
        return "33486";
      case "season3":
        return "36456";
      case "season4":
        return "38408";
      case "season5":
        return "41587";
      default:
        return url;
    }
  };

  const [episodes, setEpisodes] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      season === "movies" ? getMovies() : getSeasons();
  }, []);

  const getSeasons = () => {
    fetchSeasons(determineFetch(season)).then((data) => {
        setEpisodes(data.episodes);
    });
  }

  const getMovies = () => {
    fetchMovies().then((data) => {
        const filteredResults = data.results.filter((result) => {
          return result.type === "Movie" && result.title.includes("Boku"); 
        });
        setMovies(filteredResults);
    });
  }

  const generateThumbs = () => {
    // episode_id,
    // title,
    // aired,
    // video_url
    return episodes.map(episode => {
      return <EpisodeThumb data={episode} />
    })
  }

  return (
    <>
      <h1>Episode Display</h1>
      <h1>{ episodes.length > 0 && generateThumbs()}</h1>
      <h1>{ movies.length > 0 && movies[0].title}</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default EpisodeDisplay;
