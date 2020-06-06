import express from 'express'

import apiRouter from './routes/apiRouter'

const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
const port = parseInt(process.env.PORT, 10) || 3000

const server = express()

server.use('/api', apiRouter)

server.listen(port, err => {
  if (err) throw err
  console.log(`> ✨Ready on http://localhost:${port}`)
})
