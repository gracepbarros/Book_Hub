import createError from "http-errors";
import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import bookRouter from "./routes/book.js";
import userRouter from "./routes/user.js";
import shelfRouter from "./routes/userShelf.js";
import { Server } from "socket.io";
import http from "http";
import { messages, addMessage, resetMessages } from "./messages.js";
import { fileURLToPath } from 'url';

// Constants
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Update CORS settings for production
const corsOptions = {
  origin: process.env.NODE_ENV === "production" 
    ? process.env.FRONTEND_URL // Set this in Heroku config vars
    : "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret', // Use environment variable in production
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use("/api", userRouter);
app.use("/bookList", bookRouter);
app.use("/shelf", shelfRouter);
app.use("/messages", (req, res) => {
  res.status(200).send(messages());
});

const io = new Server(server, {
  cors: corsOptions
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    addMessage(data);
    io.emit("new_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

setInterval(() => {
  resetMessages();
}, 12 * 60 * 60 * 1000 + 30 * 60 * 1000);

// Catch-all handler for any request that doesn't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Error handling
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Start http server
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});