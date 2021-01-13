import React from "react";
import { Link, useParams } from "react-router-dom";

const EpisodeDisplay = () => {
  //   const [mhaSeasons, setMhaSeasons] = useState([]);

  //   useEffect(() => {
  //     getSeasons().then((data) => {
  //       const filteredResults = data.results.filter((result) => {
  //         return result.type.includes("Boku");
  //       });
  //       setMhaSeasons(filteredResults);
  //     });
  //   }, []);
  
  let { number } = useParams();

  console.log(number);

  return (
    <>
      <h1>Episode Display</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default EpisodeDisplay;
