import express from 'express'; //import gracas ao typescript

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world'})
})

app.listen(3333)