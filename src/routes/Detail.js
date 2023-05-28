import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Detail() {
  const { id } = useParams()
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const getMovie = useCallback(async () => {
    try {
      const json = await axios(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
      const { movie } = json.data.data
      if (movie) {
        setInfo(movie)
        setLoading(false)
      }
    } catch (e) {
      throw new Error(e)
    }
  }, [id])
  useEffect(() => {
    getMovie()
  }, [getMovie])
  return (
    <div>
      <h1>
        {info.title}({info.year})
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <img src={info.large_cover_image} alt={info.title} />
          <div>
            <label htmlFor='rate'>Rate: </label>
            <span id='rate'>{info.rating}</span>
          </div>
          <hr />
          <div>
            <h3>Description</h3>
            <p id='info'>{info.description_full}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
