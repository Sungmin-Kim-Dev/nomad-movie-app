import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres}) {
  return (
    <li>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
