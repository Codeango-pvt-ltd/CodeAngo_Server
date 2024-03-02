const express = require("express")
const app = express()

// Importing modules
const cors = require("cors")
const mongoose = require("mongoose")
const Course = require("./database")

// Middlewares
db = "empty string"
mongoose.connect(db)                                                                                   // MongoDB Atlas Connection
.then(()=>{console.log("MongoDB Connected!")})
.catch((error)=>{console.log(`OOPS! Some error -> ${error}`)})
const allowedOrigins = ['CodeAngoFrontEndHostedServerLink', 'http://localhost:3000'];                  // CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);  // No error, origin is allowed
    } else {
      callback(new Error('Not allowed by CORS'));  // Error, origin is not allowed
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json())     // to parse the incoming requset's JSON formatted string to JS object (accessed in the req.body)
app.use(express.urlencoded({ extended: true }))

// GET
app.get("/",(req,res)=>{
  const data = {
    key1 : "Value1"
  }
  res.status(200).json({
    success : true,
    message : "Hello CodeAngo",
    data : data
  })
})

// POST
app.post("/create-course-content",(req, res)=>{
  const data = {

  }
})
app.listen(3000, ()=>{console.log("Server running over 3000")})