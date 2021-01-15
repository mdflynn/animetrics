import React from "react";
import PropTypes from "prop-types";
import "./MovieThumb.scss";

const MovieThumb = (props) => {

  const { image_url, rated, start_date, synopsis, url , title} = props.data;

  const formatDate = (dateInfo) => {
    const isolateDate = dateInfo.substr(0, 10);
    const splitDate = isolateDate.split("-");
    const date = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    return date;
  };

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
        <p className="air-date">Premiered om {formatDate(start_date)}</p>
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
};
