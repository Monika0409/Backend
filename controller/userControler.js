const User = require('../model/userModel.js')
exports.home = (req, res) => {
    res.send('Hello world!');
}

exports.createUser = async(req, res) => {          // for write in database
    // extract info

    try { 
        const {name, email} = req.body

        if(!name || !email){
            throw new Error("name and email are requires")
        }

        const userExist = User.findOne({email})
        if (userExist) {
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: "User creates Successfully",
            user
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
        })  
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
        })  
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const userId =  req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "user deleted successfully"          
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
        })  
    }
}

exports.editUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully",
        })  
    } catch (error) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
        })  
    }
}