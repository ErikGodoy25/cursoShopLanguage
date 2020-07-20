import sequelize from 'sequelize';
import config from '../config/configDb';

const db = new sequelize(config);

const proposta = db.define('proposta', {
    idProposta: {
        field: 'id_proposta',
        type: sequelize.NUMBER,
        primaryKey: true
    },
    nomeCliente: {
        field: 'nome_cliente',
        type: sequelize.STRING,
    },
    email: {
        field: 'email_cliente',
        type: sequelize.STRING,
    },
    telefone: {
        field: 'telefone_cliente',
        type: sequelize.NUMBER
    },
    dataProposta: {
        field: 'data_inclusao_proposta',
        type: sequelize.DATE
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })

export default proposta