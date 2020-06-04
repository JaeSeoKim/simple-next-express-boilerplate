import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import userRouter from './userRouter'

const router = express.Router()

// middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(cookieParser())

// routes
router.use('/user', userRouter)

export default router
