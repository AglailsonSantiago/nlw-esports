import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'anucio 1'},
        {id: 2, name: 'anucio 2'},
        {id: 3, name: 'anucio 3'},
        {id: 4, name: 'anucio 4'},
    ])
})

app.listen(3333)