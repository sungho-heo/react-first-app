import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [loading, viewLoading] = useState(true)
  const [movies, viewMovies] = useState([])
  const getData = async () => {
    try {
      const json = await axios(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
      const result = json.data.data.movies
      if (result.length > 0) {
        viewMovies(result)
        viewLoading(false)
      }
    } catch (err) {
      throw new Error(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h1>The Best Movies</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>Title:{movie.title}</h2>
            <span>Year:{movie.year}</span>
            <p>Description:{movie.summary}</p>
            <span>Genres</span>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
