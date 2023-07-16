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