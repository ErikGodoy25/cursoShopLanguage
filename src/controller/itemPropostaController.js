import express from 'express';
import itemPropostaService from './../service/itemPropostaService';

const router = express.Router();

router.get('/itemPropostas', async (req, res) => {
    const retorno = await itemPropostaService.pesquisaTodosItens();
    res.status(200).json(retorno);
});

router.get('/itemProposta/:id', async (req, res) => {
    const retorno = await itemPropostaService.pesquisaItemProposta();
    res.status(200).json(retorno);
})


export default router