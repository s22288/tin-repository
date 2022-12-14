const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');


const Playlist = sequelize.define('Playlist', {

    playlist_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    playlist_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    playlist_length: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    playlist_rating: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    playlist_creation_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
});


module.exports = Playlist;