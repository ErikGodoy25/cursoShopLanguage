import sequelize from 'sequelize';
import config from '../config/configDb';

const db = new sequelize(config);

module.exports = db.define('usuario', {
    id: {
        field: 'id_usuario',
        type: sequelize.NUMBER,
        primaryKey: true
    },
    nome: {
        field: 'nome_usuario',
        type: sequelize.STRING
    },
    email: {
        field: 'email_usuario',
        type: sequelize.STRING
    },
    cpf: {
        field: 'cpf_usuario',
        type: sequelize.STRING
    },
    senha: {
        field: 'senha_usuario',
        type: sequelize.STRING
    },
    status: {
        field: 'status_usuario',
        type: sequelize.NUMBER
    },
    data_inclusao: {
        field: 'data_inclusao_usuario',
        type: sequelize.DATE
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })
