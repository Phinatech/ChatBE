import mongoose, { Schema } from "mongoose";

interface ichatMessage {
    userID?: string;
    chatID?: string;
    message?: string;
}

interface ichatDataMessage extends ichatMessage, mongoose.Document {}

const messageModel = new Schema(
  {
    chatID: {
      type: String
    },

    userID : {
        type:String
    },
    message: {
        type:String
    }

  },
  { timestamps: true }
);

export default mongoose.model<ichatDataMessage>("chatMessage", messageModel);
