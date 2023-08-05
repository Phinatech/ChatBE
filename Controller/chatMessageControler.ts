
import {Request,Response} from "express"
import MessagerModel from "../model/MessagerModel"

//Sending a message
export const createChatMessage = async (req:Request, res:Response) => {
    try {
       const {   userID,chatID} = req.params
       const {message} = req.body

       const chatMessage = await MessagerModel.create({
        userID,
        chatID,
        message
       })

       res.status(200).json({
        message:"Chat Has been Established",
        data: chatMessage
       });
    } catch (error) {
        res.status(404).json({
            message:"Error creating chat"
        })
    }
};

export const getChatMessage =async (req:Request, res:Response) => {
    try {
      const {chatID} = req.params  

      const chatMessage = await MessagerModel.find({
        chatID
      }) 

      res.status(200).json({
        message:"Gotten chat message",
        data: chatMessage
      })
    } catch (error) {
        res.status(404).json({
            message:"Error getting chat message"
        })
    }
}
 