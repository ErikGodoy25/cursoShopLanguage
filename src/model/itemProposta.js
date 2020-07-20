import sequelize from 'sequelize';
import config from '../config/configDb';

const db = new sequelize(config);

const itemProposta = db.define('item_proposta', {
    idProposta: {
        field: 'id_proposta',
        type: sequelize.NUMBER
    },
    id_plano: {
        field: 'id_plano',
        type: sequelize.NUMBER
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })
export default itemProposta 