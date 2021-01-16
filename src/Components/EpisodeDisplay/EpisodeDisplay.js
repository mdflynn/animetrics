import React, { useEffect, useState, useCallback } from "react";
import { fetchSeasons } from "../../API/apiCalls";
import { useParams, Redirect } from "react-router-dom";
import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";
import { cleanEpisodeData, formatTitle } from "../../utilities";

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
    }
  };

  const [episodes, setEpisodes] = useState([]);
  const getSeasons = useCallback(() => {
    fetchSeasons(determineFetch(season)).then((data) => {
      const clean = cleanEpisodeData(data)
      setEpisodes(clean);
    });
  }, [season]);

  useEffect(() => {
    getSeasons();
  }, [getSeasons]);

  const generateEpisodeThumbs = () => {
    return episodes.map((episode) => {
      return <EpisodeThumb key={episode.episode_id} data={episode} />;
    });
  };

  const generateLoadingContent = () => {
    if (episodes === undefined) {
      return <Redirect to="/error" />;
    } else if (episodes.length > 0) {
      return generateEpisodeThumbs();
    }  else {
      return <h1>Loading...</h1>;
    }
  }

  return (
    <>
      <h1 className="season-title">{formatTitle(season)}</h1>
      <div className="thumb-container">
        {generateLoadingContent()}
      </div>
    </>
  );
};

export default EpisodeDisplay;
