export const cleanEpisodeData = (rawData) => {
  if (!rawData.episodes) {
    return;
  }
  const cleanData = rawData.episodes.map((data) => {
    return {
      title: data.title,
      aired: data.aired,
      video_url: data.video_url,
      episode_id: data.episode_id,
    };
  });
  return cleanData;
};

export const filterMovieResults = (rawData) => {
  return rawData.results.filter((result) => {
    return (
      result.type === "Movie" &&
      result.title.includes("Boku") &&
      result.start_date
    );
  });
};

export const cleanMovieData = (dirtyData) => {
  return dirtyData.map((data) => {
    return {
      image_url: data.image_url,
      rated: data.rated,
      start_date: data.start_date,
      synopsis: data.synopsis,
      url: data.url,
      title: data.title,
      mal_id: data.mal_id,
    };
  });
};

export const formatTitle = (title) => {
  if (title === "favorites") {
    return "Favorites";
  } else {
    const capFirstLetter = title.charAt(0).toUpperCase() + title.slice(1);
    const date =
      capFirstLetter.slice(0, 6) +
      " " +
      capFirstLetter.slice(capFirstLetter.length - 1);
    return date;
  }
};

export const formatDate = (dateInfo) => {
  if (!dateInfo) {
    return `Missing Date`;
  }
  const isolateDate = dateInfo.substr(0, 10);
  const splitDate = isolateDate.split("-");
  const date = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
  return date;
};
