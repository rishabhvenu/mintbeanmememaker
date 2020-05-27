const Express = require('express');
const Path = require('path');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/memeSearch');

const app = Express();

// view engine setup
app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(Express.static(Path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);

module.exports = app;
