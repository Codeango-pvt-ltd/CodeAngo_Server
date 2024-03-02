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
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
