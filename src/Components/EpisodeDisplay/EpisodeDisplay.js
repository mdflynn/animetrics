import React, { useEffect, useState, useCallback } from "react";
import { fetchSeasons } from "../../API/apiCalls";
import { useParams, Redirect } from "react-router-dom";
import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";
import { cleanEpisodeData, formatTitle } from "../../utilities";
import "./EpisodeDisplay.scss";

const EpisodeDisplay = (props) => {
  let { season } = useParams();

  const { favEpisodes, addFavoriteEpisode } = props;

  const [episodes, setEpisodes] = useState([]);

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

  const getSeasons = useCallback(() => {
    let mounted = true;
    const selectedSeason = determineFetch(season);
    fetchSeasons(selectedSeason).then((data) => {
      if (mounted) {
        const clean = cleanEpisodeData(data);
        setEpisodes(clean);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, [season]);

  useEffect(() => {
    if (season !== "favorites") {
      getSeasons();
    }
  }, [getSeasons, season]);

  const generateEpisodeThumbs = () => {
    return episodes.map((episode, index) => {
      return (
        <EpisodeThumb
          key={episode.episode_id}
          data={{ ...episode, id: index + 1 }}
          addFavoriteEpisode={addFavoriteEpisode}
          favEpisodes={favEpisodes}
        />
      );
    });
  };

  const generateLoadingContent = () => {
    if (!episodes) {
      return <Redirect to="/error" />;
    } else if (episodes.length > 0) {
      return generateEpisodeThumbs();
    } else {
      return <h1 className="loading-screen">Loading...</h1>;
    }
  };

  const title = formatTitle(season);

  const generateFavorites = () => {
    return favEpisodes.map((episode, index) => {
      return (
        <EpisodeThumb
          key={episode.episode_id}
          data={{ ...episode, id: index + 1 }}
          addFavoriteEpisode={addFavoriteEpisode}
          favEpisodes={favEpisodes}
        />
      );
    });
  };

  const loadContent =
    season === "favorites" ? generateFavorites() : generateLoadingContent();

  return (
    <>
      <h1 className="season-title">{title}</h1>
      <div className="thumb-container">{loadContent}</div>
    </>
  );
};

export default EpisodeDisplay;
