const express = require('express');
const morgan = require('morgan'); // Khai báo morgan
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
app.use(express.static('public'));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views'); 
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.render('home');
});
// Route xử lý cho trang About
app.get('/about', (req, res) => {
    res.render('about');
});

// Route xử lý cho trang Liên hệ
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route hiển thị trang Tìm kiếm
app.get('/search', (req, res) => {
    res.render('search');
});
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
