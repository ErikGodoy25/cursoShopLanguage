import moment from 'moment';
import linguagem from './../model/linguagem';

async function linguagemListaTodos() {
    return await linguagem.findAll();
}

async function linguagemListaUm(id) {
    const one = await linguagem.findByPk(id);

    const newLanguage = {
        id: one.id_linguagem,
        nome: one.nome_linguagem,
        status: one.status_linguagem,
        tipo: one.tipo_linguagem,
        usuario: one.id_usuario,
        qtdPlanosFront: (await one.getPlanosFront()).length,
        qtdPlanosBack: (await one.getPlanosBack()).length
    }
    return newLanguage
}
async function incluirNovaLinguagem(novaLinguagem) {
    novaLinguagem['data_inclusao_linguagem'] = moment.utc().local().toDate();
    return await linguagem.create(novaLinguagem);
}
async function editarLinguagem(alterar, id) {
    await linguagem.update(alterar, { where: { id_linguagem: id } })
    return await linguagem.findByPk(id);
}
async function deletaLinguagem(id) {
    await linguagem.destroy({ where: { id_linguagem: id } })
}

const service = {
    linguagemListaTodos: () => linguagemListaTodos(),
    linguagemListaUm: (id) => linguagemListaUm(id),
    incluirNovaLinguagem: (novaLinguagem) => incluirNovaLinguagem(novaLinguagem),
    editarLinguagem: (alterar, id) => editarLinguagem(alterar, id),
    deletaLinguagem: (id) => deletaLinguagem(id)
}

export default service;