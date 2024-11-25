import express, { Express } from 'express';
import api from '@/api';
import serverConfig from './server-config';
import setServerError from './server-error';
import morgan from 'morgan';

function setServerMiddlewares(app: Express) {
  app.use(express.json());
  app.use(serverConfig.is_prod ? morgan('combined') : morgan('dev'));
  app.use(`/api/${serverConfig.api_v}/`, api);
  app.use(setServerError);
}

export default setServerMiddlewares;
