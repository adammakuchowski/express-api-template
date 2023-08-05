import Joi from 'joi'
import {SampleData} from '../interfaces/types'

export const createSampleDataSchema = Joi.object<SampleData>({
  id: Joi.string().required(),
  name: Joi.string().required(),
})
