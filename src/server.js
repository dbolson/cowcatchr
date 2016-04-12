import express from 'express'

const app = express()

app.get('/cuts', (req, res) => {
  const response = {
    cuts: [
      { id: 1, name: 'sirloin', type: 1, weight: 1.2 },
      { id: 2, name: 'ground', type: 3, weight: 1.0 },
    ]
  }

  res.send(JSON.stringify(response))
})

app.listen(3000, () => {
  console.log('listing on port 3000')
})
