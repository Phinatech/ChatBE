import mongoose, { Schema } from "mongoose";


interface ichat{
    member?:Array<string>;
}

interface ichatData extends ichat, mongoose.Document{}

const chatModel = new Schema({
    member:{
        type:Array<String>
    }
},
{timestamps: true}
)

export default  mongoose.model<ichatData>("chats", chatModel)