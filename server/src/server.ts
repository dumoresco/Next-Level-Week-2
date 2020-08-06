import express from 'express';
import routes from './route';
import cors from 'cors';

const app = express();

app.use(cors);
app.use(express.json())
app.use(routes);
//GET: Buscar ou listar uma info
//POST: Criar uma nova info
//PUT: Atualizar uma info
//DELETE: Deletar uma info

//Corpo (Request Body): dados para criação ou atualização dos registros
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação


//www.minhaapi.com.br:3333

app.listen(3000);

