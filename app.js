const express = require("express")
const app = express()

// Importing modules
const cors = require("cors")
const mongoose = require("mongoose")
const Course = require("./database")

// Middlewares
db = "mongodb+srv://riziuzi:E2zZfZlEoa8Zp2CJ@riziuzicluster.ulcokkb.mongodb.net/?retryWrites=true&w=majority&appName=riziUziCluster"
mongoose.connect(db)                                                                                   // MongoDB Atlas Connection
.then(()=>{console.log("MongoDB Connected!")})
.catch((error)=>{console.log(`OOPS! Some error -> ${error}`)})
const allowedOrigins = ['CodeAngoFrontEndHostedServerLink', 'http://localhost:3001'];                  // CORS
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
app.get("/",async (req,res)=>{
  const data = {
    key1 : "Value1"
  }
  res.status(200).json({
    success : true,
    message : "Hello CodeAngo",
    data : data
  })
})

app.get("/course", async (req, res) => {
  try {
    const courses = await Course.find({});
    if (!courses) {
      return res.status(404).json({
        success: false,
        message: "Image not found!"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Courses Retrieved with Data URLs",
      data: courses
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
      data: error
    });
  }
});


// POST
app.post("/create-course-content", async (req, res) => {
  try {
    if (!req.body.title) return res.status(400).json({ error: "No title found" });
    if (!req.body.image) return res.status(400).json({ error: "No image found" });
    if (!req.body.description) return res.status(400).json({ error: "No description found" });

    const course = new Course({
      title: req.body.title,
      image: {
        dataUrl: req.body.image.dataUrl,
        imageFormat: req.body.image.imageFormat
      },
      description: req.body.description
    });

    const newCourse = await course.save();

    return res.status(201).json({
      success: true,
      message: "Course Uploaded successfully!",
      data: newCourse
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Internal Server Error -> ${error}`
    });
  }
});

app.listen(3000, ()=>{console.log("Server running over 3000")})