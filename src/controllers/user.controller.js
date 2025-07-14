import { access } from "fs"
import userModel from '../models/user.model.js' 
export const userController = async()=>{
  const {email, userName, mobileNo, accessCode, rollNo} = req.body
  if(!email || !userName || !mobileNo || !accessCode || rollNo){
    throw new Error("Please enter all details required")
  }
  


}

