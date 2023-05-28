import PropTypes from "prop-types"
import { Link } from "react-router-dom"
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}> Title:{title}</Link>
      </h2>
      <span>Year:{year}</span>
      {summary.length < 2000 ? (
        <p>Description: {summary}</p>
      ) : (
        <p>Description: {summary.split("").splice(0, 500).join("")}</p>
      )}
      <span>Genres</span>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
