import express from 'express'
import {
  createSampleData,
  getSampleData,
} from '../controllers/sampleController'
import {validationRequest} from '../../middlewares/validationRequest'
import {createSampleDataSchema} from '../../validators/sampleDataValidation'

const router = express.Router()

router.get(
  '/getSampleData',
  getSampleData,
)

router.post(
  '/createSampleData',
  validationRequest(createSampleDataSchema),
  createSampleData,
)

export default router
