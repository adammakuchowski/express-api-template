import express, {Request, Response} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler'
import sampleRouter from './api/routes/sampleRouter'
import {connectDB} from './db/db'
import corsOptions from './corsConfig'
import notFound from './middlewares/notFoundHandler'

const app = express()
connectDB()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req: Request, res: Response): void => {
  res.send('Every day you must ask yourself: Did you do enough?')
})

app.use('/sampleRouter', sampleRouter)

app.use(notFound)
app.use(errorHandler)

export default app
