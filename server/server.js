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

  server.use((_, res, next) => {
    if (isDisableKeepAlive) {
      res.set('Connection', 'close')
    }
    next()
  })

  server.use('/api', apiRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const appServer = server.listen(port, err => {
    if (err) throw err
    if (process.env.PM2 === 'PM2') process.send('ready') // for pm2
    console.log(`> ✨Ready on http://localhost:${port}`)
  })

  process.on('SIGINT', () => {
    isDisableKeepAlive = true
    appServer.close(err => {
      console.log('> 😢 Server closed')
      process.exit(err ? 1 : 0)
    })
  })
})
