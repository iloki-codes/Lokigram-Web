const Users = require("../models/user.schema.js");
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")

        if(!token) return res.status(400).json({msg: "Invalid Authentication."})

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if(!decoded) return res.status(400).json({msg: "Invalid Authentication-Unable to verify."})

        const user = await Users.findOne({_id: decoded.id});

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({msg: "Please login first!"});

        const user = await Users.findById(id);
        if(!user) return res.status(404).json({msg: "Unable to find user!"});

        if(user.role !== "admin") return res.status(401).json({msg: "Unable to proceed further, contact Admin!"});
        next();
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

module.exports = {auth, isAdmin};
