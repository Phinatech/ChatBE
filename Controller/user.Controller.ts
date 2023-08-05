import userModel from "../model/user.model"
import e, {Request,Response} from "express"


export const createUser =async (req:Request, res:Response) => {
     try {
         const {email, password, userName, } = req.body

         const user = await userModel.create({
            email, password, userName
         })

          res.status(200).json({
            message:"Success",
            data:user
          })
     } catch (error) {
        
     }
}

//get user
export const getUser =async (req:Request, res:Response) => {
     try {
         const user = await userModel.find()

          res.status(200).json({
            message:`gotten ${user.length} users`,
            data:user
          })
     } catch (error) {
        res.status(404).json({
            message:"An error occurred while creating"
        })
     }
}

//getone user
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    const user = await userModel.findById(id);

    res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creating",
    });
  }
};

//delete User
export const DeleteUser =async (req:Request, res:Response) => {
     try {
        const id = req.params
         const user = await userModel.findByIdAndDelete(id)

          res.status(200).json({
            message:"Success",
            data:user
          })
     } catch (error) {
        res.status(404).json({
            message:"An error occurred while creating"
        })
     }
}

//update user
export const updateUser =async (req:Request, res:Response) => {
     try {
        const id = req.params
        const {email, password, userName} = req.body
         const user = await userModel.findByIdAndUpdate(id,
           {
            userName
         },
         {
            new: true
         })
          res.status(200).json({
            message:"Success",
            data:user
          })
     } catch (error) {
        res.status(404).json({
            message:"An error occurred while creating"
        })
     }
}

//login user
export const loginUser = async (req:Request, res:Response)=> {
  try {
    const {} = req.params
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if (user) {
      //checking for the user passowrd
      if(password === user?.password){
        res.status(200).json({
          message:"sign in successucefully",
          data: user._id
        })
      } else{
        res.status(403).json({
          message:"You are fake "
        })
      }

    } else {
      res.status(404).json({
        message: "An error occur",
      });
    }
  } catch (error) {
    
  }
}
 