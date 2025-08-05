import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS設定を追加
app.use('*', cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/card-prices', (c) => {
  return c.json({
    items: [
      { id: 1, price: 100, url: 'https://www.google.com' },
      { id: 2, price: 200, url: 'https://www.google.com' },
      { id: 3, price: 800, url: 'https://www.google.com' },
      { id: 4, price: 600, url: 'https://www.google.com' },
      { id: 5, price: 400, url: 'https://www.google.com' },
      { id: 6, price: 700, url: 'https://www.google.com' },
      { id: 7, price: 300, url: 'https://www.google.com' },
      { id: 8, price: 500, url: 'https://www.google.com' },
    ],
  })
})

const port = 3001

export default {
  fetch: app.fetch,
  port,
}
