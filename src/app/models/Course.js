// define course model
import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongoose_delete from 'mongoose-delete';

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


mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    deletedAt: true, // lưu thời gian xóa
    overrideMethods: true // => overwrite các phương thức
});

const CourseModel = mongoose.model('Course', Course);
export default CourseModel;