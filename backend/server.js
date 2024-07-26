import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import apiRouter from "./routes/api.js"
// import { Server } from "socket.io";
import http from "http";


// Constants
const port = process.env.PORT || 3000;

// Create http server
const app = express();

const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join("../client/")));


// const io = new Server(server, {
//   cors: {
//       origin: "http://localhost:5173",
//       methods: ["GET", "POST"],
//   }
// })

// io.on("connection", (socket) => {
//   console.log(`Socket user: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     console.log(data); // Log the message data
//     io.emit('new_message', data);
//   });

//   socket.on("disconnect", () => {
//       console.log("user disconnected");
//   });
// })

app.use("/api", apiRouter);

// function disconnectAllSockets() {
//   io.sockets.sockets.forEach(socket => {
//     socket.disconnect(true); // `true` will force the disconnection
//   });
// }
// app.post("/disconnect-sockets", (req, res) => {
//   disconnectAllSockets();
//   res.send("All sockets disconnected");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Start http server
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});