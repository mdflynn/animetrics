import React from "react";
import "./EpisodeThumb.scss";

const EpisodeThumb = ({ data }) => {

  const formatDate = (dateInfo) => {
    const isolateDate = dateInfo.substr(0, 10);
    const splitDate = isolateDate.split("-");
    const date = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    return date;
  };

  

  return (
    <article className="episode-thumb">
      <h1>{data.title}</h1>
      <p>{formatDate(data.aired)}</p>
      <a className="external-link" href={data.video_url} target="_blank">
        Episode Details
      </a>
    </article>
  );
};

export default EpisodeThumb;
