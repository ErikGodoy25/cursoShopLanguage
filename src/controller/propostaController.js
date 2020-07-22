import express from 'express';
import propostaService from './../service/propostaService';

const router = express.Router();

router.get('/proposta/:id', async (req, res) => {
    const retorno = await propostaService.pesquisarUmaProposta(req.params['id']);
    res.status(200).json(retorno);
});

router.get('/propostas', async (req, res) => {
    const retorno = await propostaService.pesquisarProposta();
    res.status(200).json(retorno);
});

router.post('/proposta/', async (req, res) => {
    const retorno = await propostaService.incluirProposta(req.body);
    res.status(201).json(retorno);
});

router.put('/proposta/:id', async (req, res) => {
    const retorno = await propostaService.editarProposta(req.body, req.params['id']);
    res.status(200).json(retorno);
});

router.delete('/proposta/:id', async (req, res) => {
    const retorno = await propostaService.deletarProposta(req.params['id']);
    res.status(200);
});

export default router


