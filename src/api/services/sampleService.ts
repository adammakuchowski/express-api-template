import {Document} from 'mongoose'

import SampleModel from '../../db/models/sampleModel'
import {SampleData} from '../../interfaces/types'

export const getAllSampleData = (): number[] => {
  return [1, 2, 3]
}

export const createNewSampleData = async (sampleData: SampleData): Promise<Document> => {
  const newSampleModel = new SampleModel(sampleData)

  const newSample = await newSampleModel.save()

  return newSample
}
