exports.showPlaylist = (req, res, next) => {
    res.render('playlist/listOfPlaylist', {navlocation: 'playlist'});
}
exports.showPlaylistEmpty = (req, res, next) => {
    res.render('playlist/playlistempty', {navlocation: 'playlist'});
}
exports.AddPlaylist = (req, res, next) => {
    res.render('playlist/playlistForm', {navlocation: 'playlist'});
}
exports.AddPlaylistWithErrors = (req, res, next) => {
    res.render('playlist/playlistFormWithError',{navlocation: 'playlist'});
}

exports.showPlaylistDetails = (req, res, next) => {
    res.render('playlist/playlistDetails', {navlocation: 'playlist'});
}
exports.showPlaylistEdit = (req, res, next) => {
    res.render('playlist/playlistEdit', {navlocation: 'playlist'});
}