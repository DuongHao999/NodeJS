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

// [GET] /courses/:id/edit
export function edit(req, res, next) {
    // console.log(req.params.id);
    CourseModel.findById(req.params.id)
        .then(
            course => {
                res.render('course/edit', { course: moongoseToObject(course) })
                // console.log(course);
            }
        )
        .catch(next);
    // res.render('course/edit');
}

//[PUT] /courses/:id
export function update(req, res, next) {
    // res.json(req.params.id);
    CourseModel.updateOne({ _id: req.params.id }, req.body)
        .then(
            course => {
                res.redirect('/me/store/courses');
            }
        )
        .catch(next);
}

//[PATCH] /courses/:id/restore
export function restore(req, res, next) {
    // res.json(req.params.id);
    CourseModel.restore({ _id: req.params.id })
        .then(
            course => {
                res.redirect('back');
            }
        )
        .catch(next);
}

//[DELETE] /courses/:id
export function destroy(req, res, next) {
    // res.json(req.params.id);
    CourseModel.delete({ _id: req.params.id })
        .then(
            course => {
                res.redirect('back');
            }
        )
        .catch(next);
}

//[DELETE] /courses/:id/force
export function forceDelete(req, res, next) {
    // res.json(req.params.id);
    CourseModel.deleteOne({ _id: req.params.id })
        .then(
            course => {
                res.redirect('back');
            }
        )
        .catch(next);
}

//[POST] /courses/handle-form-actions
export function handelFormActions(req, res, next) {
    // res.json(req.body.courseIds);
    switch (req.body.action) {
        case 'delete': {
            CourseModel.delete({ _id: { $in: req.body.courseIds } })
                .then(
                    () => {
                        res.redirect('/me/store/courses');
                    }
                )
                .catch(next);
            break;
        }
        default: {
            res.json('Action is invalid');
        }
    }
}