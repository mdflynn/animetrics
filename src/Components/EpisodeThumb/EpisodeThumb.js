import React from "react";
import PropTypes from "prop-types";
import "./EpisodeThumb.scss";

const EpisodeThumb = (props) => {
  const { title, aired, video_url, episode_id } = props.data;

  const formatDate = (dateInfo) => {
    if (!dateInfo) {
      return `Missing Data`;
    }
    const isolateDate = dateInfo.substr(0, 10);
    const splitDate = isolateDate.split("-");
    const date = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    return date;
  };

  return (
    <article className="episode-thumb">
      <p className="episode-id">Episode #{episode_id}</p>
      <h1>{title}</h1>
      <p>Aired on: {formatDate(aired)}</p>
      <a
        className="external-link"
        href={video_url}
        target="_blank"
        rel="noreferrer"
      >
        More Details...
      </a>
    </article>
  );
};

export default EpisodeThumb;

EpisodeThumb.propTypes = {
  title: PropTypes.string,
  aired: PropTypes.string,
  video_url: PropTypes.string,
  episode_id: PropTypes.number
};
