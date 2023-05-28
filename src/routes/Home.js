import { useEffect, useState } from "react"
import axios from "axios"
import Movie from "../components/Movie.js"
function Home() {
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
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
