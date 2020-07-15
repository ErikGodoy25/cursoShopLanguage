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

const service = {
    listaPlanosAll: () => listaPlanosAll()
}

export default service