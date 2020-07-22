import moment from 'moment';
import proposta from './../model/proposta';


async function pesquisarProposta() {
    return await proposta.findAll();
}

async function pesquisarUmaProposta(id) {
    return await proposta.findByPk(id);
}

async function incluirProposta(novaProposta) {
    novaProposta['data_inclusao_proposta'] = moment.utc().local().toDate()
    return await proposta.create(novaProposta);
}

async function editarProposta(alteraProposta, id) {
    await proposta.update(alteraProposta, { where: { id_proposta: id } })
    return await proposta.findByPk(id);
}

async function deletarProposta(id) {
    await proposta.destroy({ where: { id_proposta: id } })
}

const service = {
    pesquisarProposta: () => pesquisarProposta(),
    pesquisarUmaProposta: (id) => pesquisarUmaProposta(id),
    incluirProposta: (novaProposta) => incluirProposta(novaProposta),
    editarProposta: (alteraProposta, id) => editarProposta(alteraProposta, id),
    deletarProposta: (id) => deletarProposta(id)
}

export default service
