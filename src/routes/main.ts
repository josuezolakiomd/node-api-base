import { Router } from 'express';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'Zolakio',
            email: 'zolakio@hopeacts.org'
        }
    })

    res.status(201).json({ user })
})