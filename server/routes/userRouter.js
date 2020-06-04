import express from 'express'
import getUser from '../api/user/getUser'
const router = express.Router()

router.get('/:id', getUser)

export default router
