const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Le bon developpeur, test variables !! ')
})
app.get('/auth', (req, res) => {
  res.send('user logged in ')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})