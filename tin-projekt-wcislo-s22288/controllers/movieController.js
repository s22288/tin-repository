exports.showMovieList = (req, res, next) => {
    res.render('movie/listOfMovies', {});
};
exports.showMovieListEmpty = (req, res, next) => {
    res.render('movie/listOfMoviesEmpty', {});
}
exports.AddMovie = (req, res, next) => {
    res.render('movie/movieForm', {});
}
