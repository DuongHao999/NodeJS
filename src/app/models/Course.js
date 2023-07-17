// define course model
import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: String,
    description: {
        type: String
    },
    videoID: String,
    image: String,
    slug: { type: String, slug: "name" }  // tao ra slug bang name field 
}, { timestamps: true });

const CourseModel = mongoose.model('Course', Course);
export default CourseModel;