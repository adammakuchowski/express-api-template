import express, {Application, Request, Response} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import winston from 'winston'
import corsOptions from './configs/corsConfig'
import loggerConfig from './configs/winstonConfig'
import sampleRouter from './api/routes/sampleRouter'
import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFoundHandler'

export const logger = winston.createLogger(loggerConfig)

const setupMiddlewares = (app: Application) => {
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors(corsOptions))
  app.use(express.json())
}

const setupErrorHandling = (app: Application) => {
  app.use(notFound)
  app.use(errorHandler)
}

const createApp = () => {
  const app = express()
  
  setupMiddlewares(app)

  app.get('/', (req: Request, res: Response): void => {
    res.send('Every day you must ask yourself: Did you do enough?')
  })

  app.use('/sampleRouter', sampleRouter)

  setupErrorHandling(app)

  return app
}

export default createApp
