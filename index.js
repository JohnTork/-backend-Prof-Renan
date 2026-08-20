import express from 'express' //TYPE: module
// CONST EXPRESS = require('express') //TYPE: commonjs

const app = express()
app.use(express.json())
//inicializa o express - new

//exercicio 01 GET
app.get("/api/somar", (req, res) => {
  const num1 = Number(req.params.num1)
  const num2 = Number(req.params.num2)
  res.send({ message: num1 + num2 })
})

//exercico 01 com POST

app.post("/api/somar", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  res.send({ message: num1 + num2 })

  //const - recebe um valor que não pode ser alterado =0 
  //let - recebe um valor que pode ser alterado
  //var - recebe um valor que pode ser alterado (mas não é recomendado)
})

//exercio2 COM GET

app.get("/api/salario/:valor/:hora", (req, res) => {
  const valorGanho = Number(req.params.valor)
  const horaTrabalhadas = Number(req.params.hora)

  const resultado =  valorGanho * horaTrabalhadas

  res.send({ message: resultado })
})

//exercicio 02 COM POST
app.post("/api/salario", (req, res) => {
  const valorGanho = req.body.valor
  const horaTrabalhadas = req.body.hora

  const resultado = valorGanho * horaTrabalhadas

  res.send({ message: resultado})
})

//exercicio 03 COM GET 

app.get("/api/medpesos/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const peso1 = Number(req.params.peso1)
  const peso2 = Number(req.params.peso2)
  const peso3 = Number(req.params.peso3)
  const peso4 = Number(req.params.peso4)
  const peso5 = Number(req.params.peso5)

  const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

  res.send({ message: media })
  //http://localhost:3000/api/medpesos
})

//exercicio 03 COM POST

app.post("/api/medpesos", (req, res) => {
  const peso1 = req.body.peso1
  const peso2 = req.body.peso2
  const peso3 = req.body.peso3
  const peso4 = req.body.peso4
  const peso5 = req.body.peso5

  const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
  res.send({ message: media })
})

//exercio4 - COM GET
app.get("/api/convgraus/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius)
  const fahrenheit = (9 * celsius + 160) / 5

  res.send({ message: fahrenheit })
})

//EXERCICIO 04 - COM POST
app.post("/api/convgraus", (req, res) => {
  const celsius = req.body.celsius
  const fahrenheit = (9 * celsius + 160) / 5

  res.send({ message: fahrenheit })
})

//exercio5 - COM GET
app.get("/api/distancia/:milhas", (req, res) => {
  const milhas = Number(req.params.milhas)
  const km = milhas * 1.60934

  res.send({ message: km })
})

//exercicio05 com POST
app.post("/api/distancia", (req, res) => {
  const milhas = req.body.milhas
  const km = milhas * 1.60934

  res.send({ message: km })
})

//exercio6 - COM GET
app.get("/api/:segundos", (req, res) => {
  const segundos = Number(req.params.segundos)
  const horas = segundos / 3600
  const minutos = (segundos % 3600) / 60
  const seg = segundos % 60

  res.send({ message: horas + " horas, " + minutos + " minutos e " + seg + " segundos" })
})

//exercicio06 com post
app.post("/api/segundos", (req, res) => {
  const segundos = req.body.seg
  const horas = segundos / 3600
  const minutos = (segundos % 3600) / 60
  const seg = segundos % 60

  res.send ({message: horas + "horas," + minutos + "minutos e" + seg + "segundos"})
})

      //EXERCICIO COM POST



app.listen(3000, () => {
  console.log("Servidor na porta 3000")
})