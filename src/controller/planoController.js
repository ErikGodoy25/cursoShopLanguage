import express from 'express';
import planoService from './../service/planoService';

const router = express.Router()

router.get('/planos', async (req, res) => {
    const retorno = await planoService.listaPlanosAll()
    res.status(200).json(retorno)
});

router.get('/planos/:id', async (req, res) => {
    const retorno = await planoService.listaPlano(req.params['id'])
    res.status(200).json(retorno)
});

router.post('/planos', async (req, res) => {
    const retorno = await planoService.incluiNovoPlano(req.body)
    res.status(201).json(retorno)
});

router.put('/planos/:id', async (req, res) => {
    const retorno = await planoService.editarPlano(req.body, req.params['id'])
    res.status(200).json(retorno)
});

router.delete('/planos/:id', async (req, res) => {
    await planoService.deletaPlano(req.params['id'])
    res.status(200).json()
});

export default router