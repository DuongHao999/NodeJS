import CourseModel from "../models/Course.js";

// [GET] /news
export async function index(req, res) {
    // res.render('home');

    CourseModel.find();
    const instance = await CourseModel.find();
    res.json(instance);
}

export function search(req, res) {
    res.render('search');
}
