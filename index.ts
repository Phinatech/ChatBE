import express, { Application, Request, Response } from "express"
import cors from "cors"
import morgan from "morgan";
// import http from "http";
// import { Server, Socket } from "socket.io";
import mongoose from "mongoose";
import user from "./Router/userRouter"
import friend from "./Router/friendsRouter"
import chat from "./Router/chatRouter"
import chatMessage from "./Router/chatMessageRouter"
const app:Application = express();

const port: number = 9999
const url = "mongodb://0.0.0.0:27017/chat";

//create a http request
// const server = http.createServer(app)
// const io = new Server(server, {
//     cors:{
//         origin :"*",
//         methods:["Get", "Post"],
//     }
// })

app.use(cors())
app.use(express.json());
app.use(morgan("dev"))

//ROUTES
app.use("/api", user)
app.use("/api", friend)
app.use("/api", chat)
app.use("/api", chatMessage)

//deafult get
app.get("/", (req:Request ,res:Response) => {
try {
    res.status(200).json({
        message:"start"
    })
} catch (error) {
    res.status(404).json({
        message:"An error occurred"
    })
}
})

//connecting to socket io
// io.on("connection", (socket)=>{
//     console.log(socket)
// })

app.listen(port, ()=>{
    mongoose.connect(url).then(()=>{
        console.log("Connected to database");
    })
})