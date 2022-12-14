const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');


const Movie = sequelize.define('Movie', {
    movie_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    movie_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movie_length: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    movie_rating: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    movie_link: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Movie;