import bodyParser from 'body-parser';
import express from 'express';
import linguagemController from './src/controller/linguagemController';
import planoController from './src/controller/planoController';

const app = express();

app.use(bodyParser.json());

app.use('/api', linguagemController);
app.use('/api', planoController);

app.listen(3000, function () {
    console.log('Back-End Funciondando')
});