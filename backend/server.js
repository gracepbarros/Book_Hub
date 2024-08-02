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

// Constants
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Set up session middleware
app.use(session({
  secret: 'your_session_secret', // Replace with a real secret key
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(express.static(path.join("../client/")));

// Routes
app.use("/api", userRouter);
app.use("/bookList", bookRouter);
app.use("/shelf", shelfRouter);
app.use("/messages", (req, res) => {
  res.status(200).send(messages());
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Socket user: ${socket.id}`);

  socket.on("send_message", (data) => {
    console.log(data);
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

// function disconnectAllSockets() {
//   io.sockets.sockets.forEach((socket) => {
//     // console.log(socket.id);
//     socket.disconnect(true); // `true` will force the disconnection
//   });
// }
// app.post("/disconnect-sockets", (req, res) => {
//   disconnectAllSockets();
//   res.send("All sockets disconnected");
// });

// Error handling
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// Start http server
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
