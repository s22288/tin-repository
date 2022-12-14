const MovieAndPlaylistRepository = require('../repository/sequelize/MovieAndPlaylistRepository');


exports.getMovieAndPlaylist = (req, res, next) => {
    MovieAndPlaylistRepository.getMovieAndPlaylist()
        .then(movieAndPlaylist => {
            res.status(200).json(movieAndPlaylist);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getMovieAndPlaylistById = (req, res, next) => {
    
    const movieAndPlaylistId = req.params.movieAndPlaylistId;
    MovieAndPlaylistRepository.getMovieAndPlaylistById(movieAndPlaylistId)
        .then(movieAndPlaylist => {
            if (!movieAndPlaylist) {
                res.status(404).json({
                    message: 'MovieAndPlaylist with id: ' + movieAndPlaylistId + ' not found'
                })
            } else {
                res.status(200).json(movieAndPlaylist);
            }
        });
}


exports.createMovieAndPlaylist = (req, res, next) => {
    MovieAndPlaylistRepository.createMovieAndPlaylist(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        });
}

exports.updateMovieAndPlaylist = (req, res, next) => {
    
    const movieAndPlaylistId = req.params.movieAndPlaylistId;
    MovieAndPlaylistRepository.updateMovieAndPlaylist(movieAndPlaylistId, req.body)
        .then(result => {
            res.status(200).json({message: 'MovieAndPlaylist updated!', movieAndPlaylist: result});
        });
}

exports.deleteMovieAndPlaylist = (req, res, next) => {

    const movieAndPlaylistId = req.params.movieAndPlaylistId;
    MovieAndPlaylistRepository.deleteMovieAndPlaylist(movieAndPlaylistId)
        .then(result => {
            res.status(200).json({message: 'Removed MovieAndPlaylist', movieAndPlaylist: result});
        });
}


