import { Request,Response } from "express"
import userModel from "../model/user.model";
import chatModel from "../model/chatModel";

//creating the chat
export const createChat =async (req:Request, res:Response) => {
    try {
         const { userId, friendID } = req.params;

         const friend: any = await userModel.findById(friendID);
         const user: any = await userModel.findById(userId);

         //checking the user are friends 
         const checkUser = user.friends.some((el:string) => el === friendID)
         const checkFriend = friend.friends.some((el:string) => el === userId)

         if(checkUser && checkFriend){
            const chat = await chatModel.create({
                member:[userId, friendID]
            })
             res.status(201).json({
               message: "chat established successfully",
               data: chat,
             });

         } else{
            res.status(404).json({
                message:"error"
            })
         }
    } catch (error) {
        res.status(404).json({
            message:"Error"
        })    }
}

//getting all chat
export const getChat = async (req: Request, res: Response) => {
  try {
    const { userId, friendID } = req.params;
    const chat = await chatModel.find({
      member: {
        $all: [userId, friendID],
      },
    });

    res.status(201).send({
      message: "chat successfully",
      data: chat,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

//getting a specific chat
export const getSpecifiicChat = async (req: Request, res: Response) => {
  try {
    const { userId, friendID } = req.params;
    
    const chat = await chatModel.find({
      member: {
        $in: [userId, friendID],
      },
    });

    res.status(201).send({
      message: "chat successfully",
      data: chat,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

