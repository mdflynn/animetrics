import React from "react";
import PropTypes from "prop-types";
import "./MovieThumb.scss";
import { formatDate } from "../../utilities";

const MovieThumb = (props) => {
  const {
    image_url,
    rated,
    start_date,
    synopsis,
    url,
    title,
    mal_id,
  } = props.data;

  const date = formatDate(start_date);

  return (
    <article className="movie-wrapper">
      <img src={image_url} alt="movie poster" />
      <div className="movie-info">
        <p className="movie-title">{title}</p>
        <p className="movie-syn">
          Synopsis: <br />
          {synopsis}
        </p>
        <p className="rated">Rated {rated}</p>
        <p className="air-date">Premiered on {date}</p>
        <a
          className="external-link"
          href={url}
          target="_blank"
          rel="noreferrer"
          data-testid={mal_id}
        >
          More Details...
        </a>
      </div>
    </article>
  );
};

export default MovieThumb;

MovieThumb.propTypes = {
  image_url: PropTypes.string,
  rated: PropTypes.string,
  start_date: PropTypes.string,
  synopsis: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
};
