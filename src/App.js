import { useEffect, useState, useCallback } from "react"
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, changeCoins] = useState([])
  const [money, setMoney] = useState(0)
  const [myCoin, setMyCoin] = useState(0)
  const onChange = (event) => {
    setMoney(event.target.value)
  }
  const coinToUsd = (event) => {
    const { value } = event.target
    const regex = /[^0-9.]/g
    const result = parseFloat(value.replace(regex, ""))
    setMyCoin((money / result).toFixed(6))
  }

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://api.coinpaprika.com/v1/tickers?limit=10"
      )
      if (data.length > 0) {
        setLoading(false)
        changeCoins(data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])
  useEffect(() => {
    getData()
  }, [getData])
  return (
    <div>
      <h1>Coins:{coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={coinToUsd}>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
          </option>
        ))}
      </select>
      <div>
        <label htmlFor='money'>Money</label>
        <input
          onChange={onChange}
          id='money'
          type='number'
          placeholder='You money'
        ></input>
        USD
        <div>
          <label htmlFor='coin'>Coin</label>
          <input
            value={myCoin}
            id='coin'
            type='number'
            placeholder='You coin'
            readOnly
          ></input>
        </div>
      </div>
    </div>
  )
}

export default App
