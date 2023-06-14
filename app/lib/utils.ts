import { connect, connection } from 'mongoose'


const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true
}

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', process.env.MONGO_URI)
    connect(process.env.MONGO_URI as string, options)
  }
}