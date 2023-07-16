// const express = require('express');
import express from 'express';
// const handelBars = require('express-handlebars');
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js'; // neeed to import full path
import connect from './config/db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname);
const app = express();
const port = 3000;

/**connect DB */
connect();

/** ĐẶT LOCALHOST:3000 THÌ NÓ TRỎ THẲNG TỚI THƯ MỤC PUBLIC */
app.use(express.static(path.join(__dirname, '/public')));

app.engine('.hbs', engine({
    extname: '.hbs',
    partialsDir: path.join(__dirname, '/resources/views/partials')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

route(app);
// app.get('/', (req, res) => {
//     res.render('home');
// })

// app.get('/search', (req, res) => {
//     res.render('search');
// })

// app.get('/news', (req, res) => {
//     res.render('news');
// })
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

// import express from 'express';
// import { engine } from 'express-handlebars';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// console.log(__dirname);
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, '/resources/views'));

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.listen(3000);
