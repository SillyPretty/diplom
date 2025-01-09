import 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import { errorHandler, notFound } from './app/middleware/error.middleware.js'

import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'
import userRoutes from './app/user/user.routes.js'
import cardRoutes from './app/card/card.routes.js'

dotenv.config()

const app = express()

async function main() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

  app.use(cors())
  app.use(express.json())

  const _dirname = path.resolve()

  app.use('/uploads', express.static(path.join(_dirname, '/uploads/')))

  app.use('/api/auth', authRoutes)
  app.use('/api/users', userRoutes)
  app.use('/api/card', cardRoutes)


  app.use(notFound)
  app.use(errorHandler)

  const PORT = 5000

  app.listen(
    PORT,
    console.log(
      `Server start in ${process.env.NODE_ENV} on port ${PORT}`.cyan.bold
    )
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
