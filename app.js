const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Le bon developpeur :) ')
})
app.get('/hello', (req, res) => {
  res.send('Hello  :) ')
})
app.get('/test', (req, res) => {
    res.send('test  :) ')
  })
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})