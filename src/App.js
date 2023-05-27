import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, changeCoins] = useState([])
  useEffect(() => {
    const result = async () => {
      try {
        const data = await axios(
          "https://api.coinpaprika.com/v1/tickers?limit=10"
        ).json()
        if (data.length > 0) {
          changeCoins(data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    result()
  }, [])
  return (
    <div>
      <h1>Coins:{coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
