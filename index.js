const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'tfogg-react/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/tfogg-react/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)
