import mongoose, {ConnectOptions} from 'mongoose'
import appConfig from '../configs/appConfig'

const {database: {host, port, name}} = appConfig 
const DB_URL = `mongodb://${host}:${port}/${name}`

export const connectDB = async (): Promise<void> => {
  const dbOptions: ConnectOptions = {}

  try {
    await mongoose.connect(DB_URL)
    console.log('Connected to MongoDB')
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}
