const Sequelize = require('sequelize');

const sequelize = new Sequelize('user', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {

    console.log('Sucesso ao se conectar com o banco de dados');

}).catch(() => {

    console.log('Falha ao se conectar ao banco de dados');

});

module.exports = sequelize;