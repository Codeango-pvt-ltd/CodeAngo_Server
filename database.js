const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        data : Buffer,
        imageFormat: String,
    }
})

const Course = mongoose.model("CourseSchema",CourseSchema);
module.exports = Course;