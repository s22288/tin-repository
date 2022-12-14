
const MovieRepository = require('../repository/sequelize/MovieReposiotry');

exports.getMovies = (req, res, next) => {
    MovieRepository.getMovies()
        .then(movies => {
            res.status(200).json(movies);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getMovieById = (req, res, next) => {
    const movieId = req.params.movieId;
    MovieRepository.getMovieById(movieId)
        .then(movie => {
            if (!movie) {
                res.status(404).json({
                    message: 'Movie with id: ' + movieId + ' not found'
                })
            } else {
                res.status(200).json(movie);
            }
        });
}

exports.createMovie = (req, res, next) => {
    MovieRepository.createMovie(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        });
}

exports.updateMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    MovieRepository.updateMovie(movieId, req.body)
        .then(result => {
            res.status(200).json({message: 'Movie updated!', movie: result});
        });
}

exports.deleteMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    MovieRepository.deleteMovie(movieId)
        .then(result => {
            res.status(200).json({message: 'Removed Movie', movie: result});
        });
}

