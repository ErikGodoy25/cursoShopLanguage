import bodyParser from 'body-parser';
import express from 'express';
import linguagemController from './src/controller/linguagemController';

const app = express();

app.use(bodyParser.json());

app.use('/api', linguagemController);

app.listen(3001, function () {
    console.log('Back-End Funciondando')
});