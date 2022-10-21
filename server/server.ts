import express from 'express'
import dotenv from 'dotenv'
import logger from './log'

dotenv.config()

const app: express.Application = express()

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/cv.pdf', (_req, res) => {
  res.sendFile('cv.pdf', { root: __dirname });
})

const { PORT = 3000, NODE_ENV = 'production' } = process.env
app.listen(PORT, () => {
  if (NODE_ENV === 'development') {
    logger.info(`Listening http://localhost:${PORT}`)
  }
})

