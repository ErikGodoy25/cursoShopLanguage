import bodyParser from 'body-parser';
import express from 'express';
import itemPropostaController from './src/controller/itemPropostaController';
import linguagemController from './src/controller/linguagemController';
import planoController from './src/controller/planoController';
import propostaController from './src/controller/propostaController';
import usuarioController from './src/controller/usuarioController';

const app = express();

app.use(bodyParser.json());

app.use('/api', linguagemController);
app.use('/api', planoController);
app.use('/api', usuarioController);
app.use('/api', propostaController);
app.use('/api', itemPropostaController);

app.listen(3000, function () {
    console.log('Back-End Funciondando')
});