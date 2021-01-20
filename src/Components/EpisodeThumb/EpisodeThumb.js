import React from "react";
import PropTypes from "prop-types";
import "./EpisodeThumb.scss";
import { formatDate } from "../../utilities";

const EpisodeThumb = (props) => {
  const { title, aired, video_url, episode_id, id } = props.data;

  const { addFavoriteEpisode, favEpisodes } = props

  const generateLink = () => {
    const externalSite = (
      <a
        className="external-link"
        href={video_url}
        target="_blank"
        rel="noreferrer"
        data-testid={episode_id}
      >
        More Details...
      </a>
    );
    const decideLink = !video_url ? <p className="nolink">No additional details</p> : externalSite;
    return decideLink;
  };

  const loadLinks = generateLink();

  const date = formatDate(aired);

  const isFavorite = favEpisodes && favEpisodes.find(episode => episode.episode_id === episode_id)

  return (
    <article className="episode-thumb">
      <div className="thumb-div">
      <p className="episode-id">Episode #{id}</p>
      { isFavorite &&  '⭐️ '}
      </div>
      <button onClick={() => addFavoriteEpisode(props.data, isFavorite)}>{isFavorite ? "Un-" : null}Favorite</button>
    
      <h1>{title}</h1>
      <p className="air-date"><span>Aired on:</span> {date}</p>
      {loadLinks}
    </article>
  );
};

export default EpisodeThumb;

EpisodeThumb.propTypes = {
  title: PropTypes.string,
  aired: PropTypes.string,
  video_url: PropTypes.string,
  episode_id: PropTypes.number,
  id: PropTypes.number,
};
