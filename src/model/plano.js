import sequelize from 'sequelize';
import config from '../config/configDb';
import linguagem from './linguagem';

const db = new sequelize(config)

const plano = db.define('plano', {

    id_plano: {
        field: 'id_plano',
        type: sequelize.NUMBER,
        primaryKey: true
    },
    nome_plano: {
        field: 'nome_plano',
        type: sequelize.STRING
    },
    valor_plano: {
        field: 'valor_plano',
        type: sequelize.NUMBER
    },
    status_plano: {
        field: 'status_plano',
        type: sequelize.NUMBER
    },
    id_linguagem_front: {
        field: 'id_linguagem_front',
        type: sequelize.NUMBER
    },
    id_linguagem_back: {
        field: 'id_linguagem_back',
        type: sequelize.NUMBER
    },
    id_usuario: {
        field: 'id_usuario',
        type: sequelize.NUMBER
    },
    dias_plano: {
        field: 'dias_plano',
        type: sequelize.NUMBER
    },
    data_inclusao_plano: {
        field: 'data_inclusao_plano',
        type: sequelize.DATE
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })

plano.belongsTo(linguagem, {
    foreignKey: 'id_linguagem_front',
    as: 'linguagemFront'
})
plano.belongsTo(linguagem, {
    foreignKey: 'id_linguagem_back',
    as: 'linguagemBack'
})
linguagem.hasMany(plano, {
    foreignKey: 'id_linguagem_front',
    as: 'PlanosFront'
})
linguagem.hasMany(plano, {
    foreignKey: 'id_linguagem_back',
    as: 'PlanosBack'
})

export default plano
