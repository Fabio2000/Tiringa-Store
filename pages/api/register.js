import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){
    try {
        const user = await User.create(req.body);
        res.redirect('/')
        if(!user){
            return res.json({"code":'Usuário não criado'})
        }
    } catch (error) {
        res.status(400).json({status:'Não é capaz de criar um novo usuário'})
    }
}