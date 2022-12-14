const MovieReposiotry = require('../repository/sequelize/MovieReposiotry');
exports.showMovieList = (req, res, next) => {
    res.render('movie/listOfMovies', { navlocation: 'movies' });
}
exports.showMovieListEmpty = (req, res, next) => {
    res.render('movie/listOfMoviesEmpty', { navlocation: 'movies' });
}
exports.AddMovie = (req, res, next) => {
    res.render('movie/movieForm', { navlocation: 'movies' });
}
exports.AddMovieWithErrors = (req, res, next) => {
    res.render('movie/movieFormWithError', { navlocation: 'movies' });

}
exports.showMovieDetails = (req, res, next) => {
    res.render('movie/movieDetails', { navlocation: 'movies' });
}
exports.showMovieEdit = (req, res, next) => {
    res.render('movie/movieEdit', { navlocation: 'movies' });
}
