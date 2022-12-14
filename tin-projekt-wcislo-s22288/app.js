var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRoute = require('./routes/movieRoute');
var playlistRoute = require('./routes/playlistRoute');
var movieAndPlaylistRoute = require('./routes/movieAndPlaylistRoute');
const movieApiRouter = require('./routes/MovieApiRoute');
const playlistApiRouter = require('./routes/PlaylistApiRoute');
const movieAndPlaylistApiRouter = require('./routes/PlaylistAndMovieRoute');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use(express.static(path.join(__dirname, 'css')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movies', movieRoute);
// app.use('/users', usersRouter);
app.use('/playlists', playlistRoute);
app.use('/moviesAndPlaylists', movieAndPlaylistRoute);
app.use('/api/movies', movieApiRouter);
app.use('/api/playlists', playlistApiRouter);
app.use('/api/moviesAndPlaylists', movieAndPlaylistApiRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const sequelize = require('./config/sequelize/init.js');
sequelize().catch(err => console.log(err));
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
