const MovieAndPlaylistRepository = require('../repository/sequelize/MovieAndPlaylistRepository');

// exports.showMovieAndPlaylist = (req, res, next) => {
//     res.render('movieAndplaylist/movieAndPlaylistAllRecords', { navlocation: 'movieAndPlaylist' });
// }
exports.showMovieAndPlaylist = (req, res, next) => {
    MovieAndPlaylistRepository.getMovieAndPlaylist().then(movieAndPlaylist => {
        res.render('movieAndplaylist/movieAndPlaylistAllRecords', {
            movieAndPlaylist: movieAndPlaylist,
            navlocation: 'movieAndPlaylist'
        });
    });
}
exports.showMovieAndPlaylistEmpty = (req, res, next) => {
    res.render('movieAndplaylist/moviedAndplaylistListEmpty', { navlocation: 'movieAndPlaylist' });
}
// exports.AddMovieAndPlaylist = (req, res, next) => {
//     res.render('movieAndplaylist/movieAndPlaylistForm', { navlocation: 'movieAndPlaylist' });
// }
exports.AddMovieAndPlaylist = (req, res, next) => {

    res.render('movieAndplaylist/movieAndPlaylistForm', {
        movieAndPlaylist: {},
        pageTitle: 'Dodawanie filmu do playlisty',
        formMode: 'createNew',
        btnLabel: 'Dodaj film do playlisty',
        formAction: '/movieAndPlaylist/add',
        navlocation: 'movieAndPlaylist',

    });
}
exports.AddMovieAndPlaylistWithErrors = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistFormwithErrors', { navlocation: 'movieAndPlaylist' });
}

// exports.showMovieAndPlaylistDetails = (req, res, next) => {
//     res.render('movieAndplaylist/movieAndPlaylistDetails', { navlocation: 'movieAndPlaylist' });
// }
exports.showMovieAndPlaylistDetails = (req, res, next) => {
    const movieAndPlaylistId = req.params.movieAndPlaylistId;
    MovieAndPlaylistRepository.getMovieAndPlaylistById(movieAndPlaylistId)
        .then(movieAndPlaylist => {
            res.render('movieAndplaylist/movieAndPlaylistDetails', {
                movieAndPlaylist: movieAndPlaylist,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły filmu',
                formAction: '',
                navlocation: 'movieAndPlaylist',
            });
        });
}

// exports.showMovieAndPlaylistEdit = (req, res, next) => {
//     res.render('movieAndplaylist/movieAndPlaylistEdit', { navlocation: 'movieAndPlaylist' });
// }

exports.showMovieAndPlaylistEdit = (req, res, next) => {
    const movieAndPlaylistId = req.params.movieAndPlaylistId;
    MovieAndPlaylistRepository.getMovieAndPlaylistById(movieAndPlaylistId)
        .then(movieAndPlaylist => {
            res.render('movieAndplaylist/movieAndPlaylistForm', {
                movieAndPlaylist: movieAndPlaylist,
                formMode: 'edit',
                pageTitle: 'Edycja filmu',
                btnLabel: 'Edytuj film',
                formAction: '/movieAndPlaylist/edit',
                navlocation: 'movieAndPlaylist',
            });
        });
}

