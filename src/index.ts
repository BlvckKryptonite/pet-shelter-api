import express, { type Express } from 'express'

const PORT = 8000
const app = express()

type Pet = {
  name: string,
  species: string,
  adopted: boolean,
  age: number
}

const pet: Pet = {
  name: "Cicero",
  species: "Doberman",
  adopted: false,
  age: 4
}

app.get('/', (req, res)=> {
  res.json(pet)
})

app.listen(PORT, ()=>{
  console.log("Listening on port: ", PORT)
})
