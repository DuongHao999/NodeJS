// [GET] /news
export function index(req, res) {
    res.render('news');
}

export function show(req, res) {
    res.render('news-details');
}
