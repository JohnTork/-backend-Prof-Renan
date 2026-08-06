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

//exercio2

app.get("/api/salario/:valor/:hora", (req, res) => {
  const valorGanho = Number(req.params.valor)
  const horaTrabalhadas = Number(req.params.hora)

  const resultado =  valorGanho * horaTrabalhadas

  res.send({ message: resultado })
})

//exercicio3

app.get("/api/medpesos/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const peso1 = Number(req.params.peso1)
  const peso2 = Number(req.params.peso2)
  const peso3 = Number(req.params.peso3)
  const peso4 = Number(req.params.peso4)
  const peso5 = Number(req.params.peso5)

  const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

  res.send({ message: media })
})
//http://localhost:3000/api/medpesos

//exercio4
app.get("/api/convgraus/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius)
  const fahrenheit = (9 * celsius + 160) / 5

  res.send({ message: fahrenheit })
})

//exercio5
app.get("/api/distancia/:milhas", (req, res) => {
  const milhas = Number(req.params.milhas)
  const km = milhas * 1.60934

  res.send({ message: km })
})

//exercio6
app.get("/api/:segundos", (req, res) => {
  const segundos = Number(req.params.segundos)
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const seg = segundos % 60

  res.send({ message: horas + " horas, " + minutos + " minutos e " + seg + " segundos" })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})