import {
  NextFunction,
  Request,
  Response
} from 'express'

import {createNewSampleData, getAllSampleData} from '../services/sampleService'
import {SampleData} from '../../interfaces/types'
import {logger} from '../../app'

export const getSampleData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = getAllSampleData()

    res
      .status(200)
      .json(data)
  } catch (error: any) {
    logger.error(`[getSampleData] error: ${error.message}`)

    next(error)
  }
}

export const createSampleData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const sampleData: SampleData = req.body

  try {
    const newSampleData = await createNewSampleData(sampleData)
    logger.info('[createSampleData] new data sample successfully created')

    res
      .status(201)
      .json(newSampleData)
  } catch (error: any) {
    logger.error(`[createSampleData] error: ${error.message}`)

    next(error)
  }
}
