import express, { type Express } from 'express'

import {pets} from './data/pets'

const PORT = 8000
const app = express()

app.get('/', (req, res)=> {
  res.json(pets)
})

app.listen(PORT, ()=>{
  console.log("Listening on port: ", PORT)
})
