import {Request, Response} from 'express'
import {createNewSampleData, getAllSampleData} from '../services/sampleService'
import {logger} from '../../app'

export const getSampleData = (
  req: Request,
  res: Response,
): void => {
  try {
    const data = getAllSampleData()

    res.status(200)
    res.json(data)
  } catch (error: any) {
    logger.error(`[getSampleData] error: ${error.message}`)
  }
}

export const createSampleData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const sampleData = req.body

  try {
    const newSampleData = await createNewSampleData(sampleData)

    res.status(201)
    res.json(newSampleData)
    logger.info('[createSampleData] created')
  } catch (error: any) {
    logger.error(`[createSampleData] error: ${error.message}`)
  }
}
