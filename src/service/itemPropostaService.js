import itemProposta from './../model/itemProposta';
import plano from './../model/plano';
import proposta from './../model/proposta';

async function pesquisaTodosItens() {
    return await itemProposta.findAll();
}

async function pesquisaItemProposta(id) {
    return await itemProposta.findByPk(id);
}

const service = {
    pesquisaTodosItens: () => pesquisaTodosItens(),
    pesquisaItemProposta: (id) => pesquisaItemProposta(id)
}

export default service
