import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

//listar jogos
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ad: true,
                }
            }
        }
    });

    return response.json(games)
})

//listar anúncios de um jogo
app.get('/games/:id/ads', async(request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }))
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
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where:{
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord
    })
})

app.listen(3333)