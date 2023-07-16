import newsRouter from "./news.js";
import siteRouter from "./site.js";
import coursesRouter from "./courses.js";
function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

export default route;
