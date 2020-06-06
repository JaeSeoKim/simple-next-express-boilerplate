import express from 'express'
import next from 'next'
import apiRouter from './routes/apiRouter'

const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

let isDisableKeepAlive = false

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    if (isDisableKeepAlive) {
      res.set('Connection', 'close')
    }
    next()
  })

  server.use('/api', apiRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    if (process.env.PM2 === 'PM2') process.send('ready') // for pm2
    console.log(`> ✨Ready on http://localhost:${port}`)
  })

  // for pm2
  if (process.env.PM2 === 'PM2') {
    process.on('SIGINT', () => {
      isDisableKeepAlive = true
      server.close(() => {
        console.log('> 😢 Server closed')
        process.exit(0)
      })
    })
  }
})
