import express from 'express';
import usuarioService from './../service/usuarioService';

const router = express.Router()

router.get('/usuario/:id', async (req, res) => {
    const retorno = await usuarioService.pesquisarUsuario(req.params['id']);
    res.status(200).json(retorno);
});

router.get('/usuarios', async (req, res) => {
    const retorno = await usuarioService.pesquisarTodosUsuarios();
    res.status(200).json(retorno);
});

router.post('/usuario/', async (req, res) => {
    const retorno = await usuarioService.incluirUsuario(req.body);
    res.status(201).json(retorno);
});

router.put('/usuario/:id', async (req, res) => {
    const retorno = await usuarioService.editarUsuario(req.body, req.params['id']);
    res.status(200).json(retorno);
})

router.delete('/usuario/:id', async (req, res) => {
    const retorno = await usuarioService.deletarUsuario(req.params['id']);
    res.status(200).json();
})

export default router