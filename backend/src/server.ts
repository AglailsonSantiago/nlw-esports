import express, { application, request, response } from 'express'

const app = express()

//listar jogos
app.get('/games', (request, response) => {
    return response.json([])
})

//cadastrar jogo
app.post('/games', (request, response) => {
    return response.json([])
})

//listar anúncios de um jogo
app.get('/games/:id/ads', (request, response) => {
    return response.json([])
})

//cadastrar anúncio
app.post('/ads', (request, response) => {
    return response.json([])
})

//listar anúncios
app.get('/ads', (request, response) => {
    return response.json([])
})

//listar discord de determinado anúncio
app.get('/ads', (request, response) => {
    return response.json([])
})

app.listen(3333)