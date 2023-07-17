import CourseModel from "../models/Course.js";
import { moongoseToObject } from "../util/moongose.js";

export function show(req, res, next) {
    // req.params.slug; // slug này là từ url ra, EX: /courses/:slug

    CourseModel.findOne({ slug: req.params.slug })
        .then(
            course => {
                // console.log(course);
                res.render('course/show', { course: moongoseToObject(course) });
            }
        )
        .catch(next);
    // res.render('course');
}

//[GET] /courses/create
export function create(req, res, next) {
    res.render('course/create');
}

//[POST] /courses/store
export function store(req, res, next) {
    // res.json(req.body);

    const formData = req.body;
    // console.log(formData);
    formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg`;
    const course = new CourseModel(formData);
    course.save()
        .then(
            (course) => {
                res.redirect(`/courses/${course.slug}`);
                return;
            }
        )
        .catch(error => {
            if (error.name === 'MongoError' && error.code === 11000) {
                // Handle duplicate key error (uniqueness constraint violation)
                console.error('Duplicate key error:', error.keyValue.slug);
            } else {
                // Handle other errors
                console.error(error);
            }
            res.redirect(`/`);
        });
    // res.send('saved');
}