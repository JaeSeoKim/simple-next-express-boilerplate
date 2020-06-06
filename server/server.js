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

app.prepare().then(() => {
  const server = express()

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
    process.on('SIGINT', function () {
      isDisableKeepAlive = true
      app.close(function () {
        console.log('> 😢 Server closed')
        process.exit(0)
      })
    })
  }
})
