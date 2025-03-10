import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function Details() {
  const {id} = useParams();
  const [movieDetails, setMovieDetails] = useState();
  console.log(id);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json.data.movie);
    setMovieDetails(json.data.movie);
  };
  console.log(movieDetails);
  
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <h1>
      <Link to="/">Details</Link>
    </h1>
  );
}

export default Details;
