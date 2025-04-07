import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
const signUp = async (req, res, next) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({name,email, password: hashedPassword })
    try {

        await newUser.save();
        res.status(201).json("user created successfully")
    }
    catch (error) {

        next(error)


    }


}

export default signUp