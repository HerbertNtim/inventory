import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

// ROUTES IMPORTS
import dashboardRouter from './routes/dashboardRoutes'
import productsRouter from './routes/productsRoutes'
import usersRouter from './routes/usersRoutes'
import expenseRouter from './routes/expenseRoutes'

// CONFIGURATIONS 
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use('/dashboard', dashboardRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/expenses', expenseRouter)

// SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
