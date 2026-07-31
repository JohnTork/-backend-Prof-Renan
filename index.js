import express from 'express' //TYPE: module
// CONST EXPRESS = require('express') //TYPE: commonjs

const app = express()
//inicializa o express - new

app.get("/api/somar", (req, res) => {
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  res.send({ message: num1 + num2 })

  //const - recebe um valor que não pode ser alterado =0 
  //let - recebe um valor que pode ser alterado
  //var - recebe um valor que pode ser alterado (mas não é recomendado)
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
