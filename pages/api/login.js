import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){

    const {email,password, text}=req.body
    const user = await User.findOne({email,password, text})
    if(!user){
        return res.json({status:'Not able to find the user'})
    }
    else{
        res.redirect('/home')
    }
}