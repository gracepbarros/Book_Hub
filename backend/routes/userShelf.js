import express from 'express';
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
    const { googleID, userID, category, favorite } = req.body;
    console.log(" requested body: ", req.body);

    if (!userID) {
        return res.status(400).json({ error: "userID is required" });
    }

    try {
        let userShelf = await prisma.userShelf.findFirst({
            where: {
                googleID,
                userID,
            },
        });

        if (!userShelf) {
            userShelf = await prisma.userShelf.create({
                data: {
                    googleID, 
                    userID, 
                    category, 
                    favorite 
                },
            });

        } else {
            userShelf = await prisma.userShelf.update({
                where: {
                    shelfID: userShelf.shelfID,
                },
                data: {
                    category,
                    favorite,
                },
            });
        }

        res.status(200).json(userShelf);
    } catch (error) {
        console.error("Error creating or updating userShelf: ", error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }

});

export default router;