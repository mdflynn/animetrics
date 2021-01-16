import React from "react";
import PropTypes from "prop-types";
import "./EpisodeThumb.scss";
import { formatDate } from "../../utilities";

const EpisodeThumb = (props) => {
  const { title, aired, video_url, episode_id, id } = props.data;

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

  return (
    <article className="episode-thumb">
      <p className="episode-id">Episode #{id}</p>
      <h1>{title}</h1>
      <p>Aired on: {date}</p>
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
