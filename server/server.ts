import express = require('express')
import logger from './log'

const app: express.Application = express()

app.get('/', (req, res) => {
  res.json(JSON.stringify({ok: new Date()})).end()
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  logger.info('Listening http://localhost:%s', port)
})
