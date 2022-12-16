const PlaylistRepository = require('../repository/sequelize/PlaylistRepository');

// exports.showPlaylist = (req, res, next) => {
//     res.render('playlist/listOfPlaylist', {navlocation: 'playlist'});
// }
exports.showPlaylist = (req, res, next) => {
    PlaylistRepository.getPlaylists().then(playlists => {
        res.render('playlist/listOfPlaylist', {
            playlists: playlists,
            navlocation: 'playlist'
        });
    });
}
exports.showPlaylistEmpty = (req, res, next) => {
    res.render('playlist/playlistempty', { navlocation: 'playlist' });
}
// exports.AddPlaylist = (req, res, next) => {
//     res.render('playlist/playlistForm', {navlocation: 'playlist'});
// }
exports.AddPlaylist = (req, res, next) => {

    res.render('playlist/playlistForm', {
        playlist: {},
        pageTitle: 'Dodawanie playlisty',
        formMode: 'createNew',
        btnLabel: 'Dodaj playlistę',
        formAction: '/playlist/add',
        navlocation: 'playlist',
        validationErrors: []
    });
}
exports.AddPlaylistWithErrors = (req, res, next) => {
    res.render('playlist/playlistFormWithError', { navlocation: 'playlist' });
}

// exports.showPlaylistDetails = (req, res, next) => {
//     res.render('playlist/playlistDetails', {navlocation: 'playlist'});
// }


exports.showPlaylistDetails = (req, res, next) => {
    const playlistId = req.params.playlistId;
    PlaylistRepository.getPlaylistById(playlistId)
        .then(playlist => {
            res.render('playlist/playlistDetails', {
                playlist: playlist,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły playlisty',
                formAction: '',
                navlocation: 'playlist',
                validationErrors: []
            });
        });
}
// exports.showPlaylistEdit = (req, res, next) => {
//     res.render('playlist/playlistEdit', {navlocation: 'playlist'});
// }

exports.showPlaylistEdit = (req, res, next) => {
    const playlistId = req.params.playlistId;
    PlaylistRepository.getPlaylistById(playlistId)
        .then(playlist => {
            res.render('playlist/playlistForm', {
                playlist: playlist,
                formMode: 'edit',
                pageTitle: 'Edycja playlisty',
                btnLabel: 'Edytuj playlistę',
                formAction: '/playlist/edit',
                navlocation: 'playlist',
                validationErrors: []
            });
        }
        );
}