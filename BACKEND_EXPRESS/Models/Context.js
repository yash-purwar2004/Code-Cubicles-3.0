const mongoose = require ('mongoose');

const ContextSchema = new mongoose.Schema({
    context:{
        type:String,
        required:true
    },
    embedding:{
        type:[Number],
    },
    UserId: {type: mongoose.Schema.Types.ObjectId,ref: "users",required: true},
});
const ContextModel = mongoose.model('contexts',ContextSchema);
module.exports = ContextModel;