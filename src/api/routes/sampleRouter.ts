import express from 'express'
import withAsyncHandler from 'express-async-handler'

import {
  createSampleData,
  getSampleData
} from '../controllers/sampleController'

const router = express.Router()

router.get(
  '/getSampleData',
  withAsyncHandler(getSampleData)
)

router.post(
  '/createSampleData',
  withAsyncHandler(createSampleData)
)

export default router
