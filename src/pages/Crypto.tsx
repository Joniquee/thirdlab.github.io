import { useEffect, useState } from 'react'

interface Coin {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
}

export default function Crypto() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCoins = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana'
      )

      if (!res.ok) {
        throw new Error('Ошибка загрузки криптовалют')
      }

      const data: Coin[] = await res.json()
      setCoins(data)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <section>
      <button onClick={fetchCoins}>Обновить</button>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {coins.slice(0, 10).map(coin => (
          <li key={coin.id}>
            <strong>{coin.name}</strong> ({coin.symbol.toUpperCase()}) — $
            {coin.current_price.toFixed(2)}{' '}
            <span
              style={{
                color:
                  coin.price_change_percentage_24h >= 0 ? 'green' : 'red',
              }}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
