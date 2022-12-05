import Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import User from "../model/user";

export default class controller {
    static registerUser = async (req, res)=>{
        const {name, username, email,password} = req.body;

        const user__email = await User.findOne({email})
        if(user__email){
            return res.status(409).json({message: "Email has been taken"});
        }

        const user__username = await User.findOne({username})

        if(user__username) {
            return res.status(409).json({message: "Username has been taken"})
        }

        const salt = await bcrypt.genSalt(8);

        const encrypted_ps = await bcrypt.hash(password, salt)
        try {
            const user = await User.create({
                id: uuidv4(),
                name,
                username,
                email,
                password: encrypted_ps
            })
            user.save()

            return res.status(201).json({
                message: "User Registered",
                user
            })
        }   catch(err) {
            return res.status(400).json({
                msg: err
            })
        }
    }
    static signIn = async(req, res)=>{
        try {
            const { email, password} = req.body
            const user = await User.findOne({email})

            if(!user) {
                return res.status(400).json({
                    Error: "Email doesn't Exist!"
                })
            }

            const passCheck = bcrypt.compare(password, user.password)
            if(!passCheck){
                return res.status(401).json({Error: "Please Check Email or Password"});
            }

            const token = Jwt.sign({_id:user._id}, process.env.TOKEN_SECRET)

            res.cookie("token", token, {expire: new Date() + 1});

            const {_id, username} = user;

            return res.status(201).json({
                token,
                user: {
                    _id,
                    username,
                    email,
                }
            })
        } catch(err){
            return res.status(400).json({
                Error: "Check your regitration and try again"
            })
        }
    }

    static signOut = (req, res) => {
        res.clearCookie("token");
        return res.json({
          message: "User has signed out!",
        });
      };
}