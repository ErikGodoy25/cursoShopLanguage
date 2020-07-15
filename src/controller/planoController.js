import express from 'express'
import planoService from './../service/planoService'


const router = express.Router()

router.get('/planos', async (req, res) =>{
    const retorno = await planoService.listaPlanosAll()
    res.status(200).json(retorno)
})

export default router