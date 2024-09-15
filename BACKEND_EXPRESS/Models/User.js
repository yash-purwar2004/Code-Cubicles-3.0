const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    companyname:{
        type:String,
        required:true,
    },
    companyurl:{
        type:String,
        required:true,
    },
    contexts: [{type: mongoose.Schema.Types.ObjectId,ref:"contexts"}],
});
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;