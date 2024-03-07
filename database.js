const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    dataUrl: {
      type: String,
      required: true,
    },
    imageFormat: String,
  },
  rating : {
    type:Number,
    required:true
  },
  createdOn : {
    type: Number,
    default:Date.now
  },
  category:{
    type: String,
    required:true
  }
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
