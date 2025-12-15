import { useEffect, useState } from 'react'

interface Article {
  article_id: string
  title: string
  description?: string
  link?: string
  image_url?: string
  source_id?: string
}

interface NewsResponse {
  status: string
  totalResults: number
  nextPage?: string
  results: Article[]
}

export default function News() {
  const [news, setNews] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const API_KEY = 'pub_7918621647d348b6b6519d1c6fca9efb'

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=ru&country=ru`)
      .then(res => res.json())
      .then((data: NewsResponse) => {
        setNews(data.results) // 🔥 ВАЖНО
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>Загрузка новостей...</p>
  }

  return (
    <section>
      {news.map(article => (
        <article key={article.article_id}>
          <h3>{article.title}</h3>

          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              width={300}
            />
          )}

          {article.description && <p>{article.description}</p>}

          {article.link && (
            <a href={article.link} target="_blank" rel="noreferrer">
              Читать полностью
            </a>
          )}
        </article>
      ))}
    </section>
  )
}
