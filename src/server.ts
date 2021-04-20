import express, { request } from 'express';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('O servidor está rodando na porta 3333'));