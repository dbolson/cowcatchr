import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/cuts', function (req, res) {
  const response = {
    cuts: [
      { id: 1, name: 'sirloin', type: 1, weight: 1.2 },
      { id: 2, name: 'ground', type: 3, weight: 1.1 },
    ]
  }
  res.json(response)
})

app.listen(3000, function () {
  console.log('listening on port 3000')
})
