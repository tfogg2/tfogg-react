const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'tfogg/build')))
app.use(express.static(path.join(__dirname, 'tfogg/src')))
app.use(express.static(path.join(__dirname, 'tfogg/public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/tfogg/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)
