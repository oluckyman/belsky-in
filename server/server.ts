import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import logger from './log'

dotenv.config()

const app: express.Application = express()

// app.use(express.static(__dirname))
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

const { PORT = 5000, HOST, NODE_ENV = 'production' } = process.env
app.listen(PORT, () => {
  if (NODE_ENV === 'development') {
    logger.info(`Listening http://localhost:${PORT}`)
  }
  if (NODE_ENV === 'production') {
    // Prevent app from sleeping
    app.get('/ping', (req, res) => res.send('pong'))
    const ping = () => axios.get(`https://${HOST}/ping`)
      .then(response => {
        logger.info(response.data)
      })
      .catch(error => {
        logger.error(error)
      })
      .then(() => {
        setTimeout(ping, 1000 * 60 * 25)
      })

    logger.info('Ping myself 👈')
    ping()
  }
})

