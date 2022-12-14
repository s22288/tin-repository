const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');



const PlaylistAndMovie = sequelize.define('PlaylistAndMovie', {
   movie_playlist_id: {
         type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
    },
    movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    playlist_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    position : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }



});

module.exports = PlaylistAndMovie;