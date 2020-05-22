import express = require('express')
import logger from './log'

const app: express.Application = express()

// app.use(express.static(__dirname))
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})


const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  logger.info('Listening http://localhost:%s', port)
  // tslint:disable-next-line:no-console
  console.log(server.address())
})
