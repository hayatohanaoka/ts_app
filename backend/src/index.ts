import { serve } from 'bun'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3001

export default {
  fetch: app.fetch,
  port,
}
