import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3001/api/v1/summary', ({ request }) => {
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    if (q === "test") {
      return HttpResponse.json({
        items: [
          {
            id: "1",
            price: "1000",
            url: "https://example-1.com",
          },
          {
            id: "2",
            price: "2000",
            url: "https://example-2.com",
          }
        ]
      })
    }
  }),
]
