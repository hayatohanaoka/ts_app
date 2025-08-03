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

const port = 3001

export default {
  fetch: app.fetch,
  port,
}
