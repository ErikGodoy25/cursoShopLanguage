import moment from 'moment'
import plano from './../model/plano'


async function listaPlanosAll() {
    const lista = await plano.findAll()

    const newList = Promise.all(lista.map(async item => {
        const novoItem = {
            id: item.id_plano,
            nome: item.nome_plano,
            valor: item.valor_plano,
            status: item.status_plano,
            id_linguagem_front: item.id_linguagem_front,
            nome_front: (await item.getLinguagemFront()).nome_linguagem,
            id_linguagem_back: item.id_linguagem_back,
            nome_back: (await item.getLinguagemBack()).nome_linguagem
        }
        return novoItem
    }))
    return newList
}
async function listaPlano(id) {
    const one = await plano.findByPk(id)
}
async function incluiNovoPlano(newPlano) {
    newPlano['data_inclusao_plano'] = moment.utc().local().toDate()
    return await plano.create(newPlano)
}
async function editarPlano(alterar, id) {
    await plano.update(alterar, { where: { id_plano: id } })
    return await plano.findByPk(id)
}
async function deletaPlano(id) {
    await plano.destroy({ where: { id_plano: id } })
}

const service = {
    listaPlanosAll: () => listaPlanosAll(),
    listaPlano: () => listaPlano(),
    incluiNovoPlano: (newPlano) => incluiNovoPlano(newPlano),
    editarPlano: (alterar, id) => editarPlano(alterar, id),
    deletaPlano: (id) => deletaPlano(id)
}

export default service