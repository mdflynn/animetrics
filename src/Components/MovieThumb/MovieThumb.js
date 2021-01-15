import React from "react";
import PropTypes from "prop-types";
import "./MovieThumb.scss";

const MovieThumb = (props) => {
    const { image_url, rated, start_date, synopsis, url } = props.data;

    return (
        <h1>MovieThumb</h1>
    )
}

export default MovieThumb;

MovieThumb.PropTypes = {
    image_url: PropTypes.string,
    rated: PropTypes.string,
    start_date: PropTypes.string,
    synopsis: PropTypes.string,
    url: PropTypes.string
}