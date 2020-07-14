import sequelize from 'sequelize';
import config from '../config/configDb';

const db = new sequelize(config)

const plano = db.define('plano', {

    id_plano: {
        field: 'id_linguagem',
        type: sequelize.NUMBER,
        primaryKey: true
    },
    nome_plano: {
        field: 'nome_linguagem',
        type: sequelize.STRING
    },
    status_linguagem: {
        field: 'status_linguagem',
        type: sequelize.NUMBER
    },
    tipo_linguagem: {
        field: 'tipo_linguagem',
        type: sequelize.STRING
    },
    id_usuario: {
        field: 'id_usuario',
        type: sequelize.NUMBER
    },
    data_inclusao_linguagem: {
        field: 'data_inclusao_linguagem',
        type: sequelize.DATE
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })

})

export default plano
