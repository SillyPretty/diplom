import express from 'express'

import { getCard } from './card.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/').get(getCard)
router.route('/post').get(protect, getCard)

export default router
