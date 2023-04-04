const Sequelize = require('sequelize');

const db = require('../../db/db');

const User = db.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cell: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync();

module.exports = User;