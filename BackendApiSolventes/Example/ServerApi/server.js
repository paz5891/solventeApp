import express from 'express'
import helmet from "helmet"
import bodyParser from 'body-parser'
import routes from './config/routes'
import cors from 'cors'

const app = express()
const corsOptions = {origin: '*'}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet());

app.use('/api',cors(corsOptions), routes)

app.get('/', (req, res) => {res.send("API SOLVENTES")})
    
const server = app.listen(3000, () => {
    console.log(`http://localhost:${server.address().port}`)
})

export default app