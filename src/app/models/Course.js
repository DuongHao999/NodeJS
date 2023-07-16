// define course model
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: String,
    description: {
        type: String
    },
    image: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const CourseModel = mongoose.model('Course', Course);
export default CourseModel;