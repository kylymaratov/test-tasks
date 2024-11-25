import { Router } from 'express';
import tokenApi from './token-api';

const api = Router();

api.use('/token/', tokenApi);

export default api;
