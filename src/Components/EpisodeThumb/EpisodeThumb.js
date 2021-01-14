import React from "react";
import "./EpisodeThumb.scss";

const EpisodeThumb = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.aired}</p>
      <a className="external-link" href={data.video_url}>Episode Details</a>
    </div>
  );
};

export default EpisodeThumb;
