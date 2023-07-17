import CourseModel from "../models/Course.js";
import { multipleMoongoseToObject } from "../util/moongose.js";

//  [GET] /me/store/courses
export function storeCourses(req, res, next) {

    CourseModel.find({})
        .then(
            courses => {
                // res.json(courses);
                res.render('me/store-courses', { courses: multipleMoongoseToObject(courses) });
            }
        )
        .catch(next);
}