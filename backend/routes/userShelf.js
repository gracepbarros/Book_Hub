import express from 'express';
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    const { googleID, userID } = req.query;

    if (!googleID) {
        return res.status(400).json({ error: "googleID is required!" });
    }
    if (!userID) {
        alert("Login required to view book details.");
        return res.status(400).json({ error: "userID is required!" });
    }

    try {
        const userShelf = await prisma.userShelf.findFirst({
            where: {
                googleID,
                userID,
            },
        });

        res.status(200).json(userShelf);
    } catch (error) {
        console.error("Error fetching userShelf: ", error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
});

router.get("/:category", async (req, res) => {
    const { category } = req.params;
    const { userID } = req.query;

    const categoryMap = {
        Unread: 1,
        Reading: 2,
        Read: 3,
        Abandoned: 4,
      };

    try {
        let userShelf;
        if (category === "Favourite"){
            userShelf = await prisma.userShelf.findMany({
                where: {
                    userID,
                    favorite: true,
                },
            })
        } else{
            userShelf = await prisma.userShelf.findMany({
                where: {
                    userID,
                    category: categoryMap[category],
                },
            })
        }

        if (!userShelf) {
            return res.status(404).json({ error: "No books found in this category" });
        }

        res.status(200).json(userShelf);
    }   catch (error) {
        console.error("Error fetching userShelf: ", error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
});

router.post("/", async (req, res) => {
    const { googleID, userID, favorite } = req.body;
    let { category } = req.body;

    if (!req.body) {
        return res.status(400).json({ error: "Body is required!" });
    }
    if (!userID) {
        return res.status(400).json({ error: "userID is required!" });
    }
    if (!googleID) {
        return res.status(400).json({ error: "googleID is required!" });
    }
    if (!category) {
        category = 0;
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