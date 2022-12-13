exports.showMovieAndPlaylist = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistAllRecords', { navlocation: 'movieAndPlaylist' });
}
exports.showMovieAndPlaylistEmpty = (req, res, next) => {
    res.render('movieAndplaylist/moviedAndplaylistListEmpty', { navlocation: 'movieAndPlaylist' });
}
exports.AddMovieAndPlaylist = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistForm', { navlocation: 'movieAndPlaylist' });
}
exports.AddMovieAndPlaylistWithErrors = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistFormwithErrors', { navlocation: 'movieAndPlaylist' });
}

exports.showMovieAndPlaylistDetails = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistDetails', { navlocation: 'movieAndPlaylist' });
}
exports.showMovieAndPlaylistEdit = (req, res, next) => {
    res.render('movieAndplaylist/movieAndPlaylistEdit', { navlocation: 'movieAndPlaylist' });
}
