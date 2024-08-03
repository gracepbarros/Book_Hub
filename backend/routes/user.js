import express from 'express';
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/google-login", async (req, res) => {
  const { googleId, name, picture } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: { userID: googleId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          userID: googleId,
          name: name,
          picture: picture,
        },
      });
    }

    // Set user in session
    req.session.user = user;

    res.status(200).json(user);
  } catch (error) {
    console.error("Error handling user login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/check-session", (req, res) => {
    if (req.session.user) {
      res.json({ user: req.session.user });
    } else {
      res.status(401).json({ error: "No active session" });
    }
  });
  
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not log out" });
      }
    res.clearCookie('connect.sid'); // Clear the session cookie
    return res.json({ message: "Logged out successfully" });
    });
});

export default router;