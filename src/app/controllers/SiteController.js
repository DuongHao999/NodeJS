import CourseModel from "../models/Course.js";
import { multipleMoongoseToObject } from "../util/moongose.js";

// [GET] /news
export function index(req, res, next) {
    CourseModel.find()
        .then(
            courses => {
                // console.log(courses);

                // Xử lý lỗi không thể truy cập properties courses 
                // const coursesObj = courses.map((course => {
                //     return course.toObject();
                // }));

                res.render('home', { courses: multipleMoongoseToObject(courses) });
            }
        )
        .catch(next);
    // res.json(instance);
}

export function search(req, res) {
    res.render('search');
}
