import mongoose from "mongoose";

interface Iuser {
    email?: string;
    userName?:string;
    password?:string;
    friends?:Array<string>;
}

interface iUserData extends Iuser , mongoose.Document{}

const usermodel = new mongoose.Schema(
    {
        userName:{
            type:String,
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        friends:{
            type:Array<String>
        }
    },
    {timestamps: true}
)

export default mongoose.model<iUserData>("users", usermodel)