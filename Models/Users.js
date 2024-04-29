const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model("User", mongoose.userSchema);

module.exports= User;
