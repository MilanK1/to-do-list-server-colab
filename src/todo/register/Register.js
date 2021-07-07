import User from "../Models";
import bcrypt from 'bcrypt'
export default function Register(req,res) {
bcrypt.hash(req.body.password, 12).then(
    (hash)=>{
        const newUser = new User({
            username: req.body.username,
            password: hash
        })
    }
)


}