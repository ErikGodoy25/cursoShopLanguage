import express from 'express';
import linguagemService from './../service/linguagemService';

const router = express.Router()

router.get('/linguagem', async (req, res) => {
    const retorno = await linguagemService.linguagemListaTodos()
    res.status(200).json(retorno)
});

router.get('/linguagem/:id', async (req, res) => {
    const retorno = await linguagemService.linguagemListaUm(req.params['id'])
    res.status(200).json(retorno)
});

router.post('/linguagem/', async (req, res) => {
    const retorno = await linguagemService.incluirNovaLinguagem(req.body)
    res.status(201).json(retorno)
});

router.put('/linguagem/:id', async (req, res) => {
    const retorno = await linguagemService.editarLinguagem(req.body, req.params['id'])
    res.status(200).json()
});

router.delete('/linguagem/:id', async (req, res) => {
    await linguagemService.deltaLinguagem(req.params['id'])
    res.status(200).json()
});

export default router