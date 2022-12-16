const MovieReposiotry = require('../repository/sequelize/MovieReposiotry');
// exports.showMovieList = (req, res, next) => {
//     res.render('movie/listOfMovies', { navlocation: 'movies' });
// }

exports.showMovieList = (req, res, next) => {
    MovieReposiotry.getMovies().then(movies => {
        res.render('movie/listOfMovies', {
            movies: movies,
            navlocation: 'movie'
        });
    });
}

exports.showMovieListEmpty = (req, res, next) => {
    res.render('movie/listOfMoviesEmpty', { navlocation: 'movies' });
}
exports.AddMovie = (req, res, next) => {
    res.render('movie/movieForm', {
        movie: {},
        pageTitle: 'Dodawanie filmu',
        formMode: 'createNew',
        btnLabel: 'Dodaj film',
        formAction: '/movies/add',
        navlocation: 'movie',


    });
}
exports.AddMovieWithErrors = (req, res, next) => {
    res.render('movie/movieFormWithError', { navlocation: 'movies' });

}
exports.showMovieDetails = (req, res, next) => {
    const movieId = req.params.movieId;
    MovieReposiotry.getMovieById(movieId)
        .then(movie => {
            res.render('movie/movieDetails', {
                movie: movie,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły filmu',
                formAction: '',
                navlocation: 'movie',

            });
        });
}
exports.showMovieEdit = (req, res, next) => {
    const movieId = req.params.movieId;
    MovieReposiotry.getMovieById(movieId)
        .then(movie => {
            res.render('movie/movieForm', {
                movie: movie,
                formMode: 'edit',
                pageTitle: 'Edycja filmu',
                btnLabel: 'Edytuj film',
                formAction: '/movies/edit',
                navlocation: 'movie',

            });
        });
}
