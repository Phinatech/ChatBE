import { Request ,Response} from "express";
import userModel from "../model/user.model";
import mongoose from "mongoose";

export const beFriend = async(req:Request, res:Response) =>{
    try {
        const {userId, friendID}=  req.params

        const friend:any = await userModel.findById(friendID)
        const user: any = await userModel.findById(userId)

        if(user && friend){
            friend.friends?.push(userId)
            friend.save()

            user.friend.push(friendID)
            user.save()
        }

        res.status(201).json({
            message:"you ar both friends"
        })
    } catch (error ) {
       res.status(400).json({
        message:"Error"
       }) 
    }
}

export const unFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendID } = req.params;

    const friend: any = await userModel.findById(friendID);
    const user: any = await userModel.findById(userId);

    if (user && friend) {
      friend.friends?.pull(userId);
      friend.save();

      user.friend.pull(friendID);
      user.save();
    }

    res.status(201).json({
      message: "you are both  no morefriends",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};