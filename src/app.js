import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()


//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())

app.get('/api', (req, res) => {
  res.send('<h1>Welcome to server</h1>')
})


export default app