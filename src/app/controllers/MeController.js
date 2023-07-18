import CourseModel from "../models/Course.js";
import { multipleMoongoseToObject } from "../util/moongose.js";

//  [GET] /me/store/courses
export async function storeCourses(req, res, next) {

    // Nếu trong function có nhiều promise => thì cần đưa vào promise all để xử lý
    Promise.all([CourseModel.find({}), CourseModel.countDocuments()])
        .then(([courses, count]) => {
            // console.log(courses, count);
            res.render('me/store-courses', { courses: multipleMoongoseToObject(courses), count: count });
        })
        .catch(next);

    // Vẫn dùng được 
    const courses = await CourseModel.find({});
    const count = await CourseModel.countDocuments();
    res.render('me/store-courses', { courses: multipleMoongoseToObject(courses), count });

    // CourseModel.countDocuments()
    //     .then(count => {
    //         console.log(count);
    //     })
    //     .catch(next);

    // CourseModel.find({})
    //     .then(
    //         courses => {
    //             // res.json(courses);
    //             res.render('me/store-courses', { courses: multipleMoongoseToObject(courses) });
    //         }
    //     )
    //     .catch(next);
}

//  [GET] /me/trash/courses
export function trashCourses(req, res, next) {

    CourseModel.findDeleted()
        .then(
            courses => {
                // res.json(courses);
                res.render('me/trash-courses', { courses: multipleMoongoseToObject(courses) });
            }
        )
        .catch(next);
}