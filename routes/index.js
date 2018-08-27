const express = require('express')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'tfogg-react/build')))

app.use(require('prerender-node'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/tfogg-react/build/index.html'))
})


module.exports = router;
