const Sequalize = require('sequelize');

const Movie = require('../../model/Movie');
;



exports.getMovies = () => {
    return Movie.findAll();
};

exports.getMovieById = (movieId) => {
    return Movie.findByPk(movieId);
}

exports.createMovie = (data) => {
    return Movie.create({
        movie_name: data.movie_name,
        movie_length: data.movie_length,
        movie_rating: data.movie_rating,
        movie_link: data.movie_link,
        photo_link: data.photo_link
    });
}

exports.updateMovie = (movieId, data) => {
    return Movie.update(data, {where: {_id: movieId}});
}


exports.deleteMovie = (movieId) => {
    return Movie.destroy({
        where: {movie_id: movieId}
    });
}
