import moment from 'moment'
import linguagem from './../model/linguagem'

async function linguagemListaTodos() {
    return await linguagem.findAll()
}

async function linguagemListaUm(id) {
    return await linguagem.findByPk(id)
}

async function incluirNovaLinguagem(novaLinguagem) {
    novaLinguagem['data_inclusao_linguagem'] = moment.utc().local().toDate()
    return await linguagem.create(novaLinguagem)
}

async function editarLinguagem(alterar, id) {
    await linguagem.update(alterar, { where: { id_linguagem: id } })
    return await language.findByPk(id)
}

async function deletaLinguagem(id) {
    await linguagem.destroy({ where: { id_linguagem: id } })
}

const service = {
    linguagemListaTodos: () => linguagemListaTodos(),
    linguagemListaUm: (id) => linguagemListaUm(id),
    incluirNovaLinguagem: (novaLinguagem) => incluirNovaLinguagem(novaLinguagem),
    editarLinguagem: (alterar, id) => editarLinguagem(alterar, id)
}

export default service;