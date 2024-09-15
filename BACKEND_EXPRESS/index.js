const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const AuthRouter = require('./Controllers/AuthController.js');
const ContextRouter = require('./Controllers/ContextController.js')
dotenv.config();

require('./Models/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/context',ContextRouter);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});



const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});