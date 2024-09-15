const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_CONN)
    .then(()=>{
    console.log("MongoDB connected !");
}).catch((err)=>{
    console.log("MongoDB Connection Error: ", err);
})