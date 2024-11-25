import { Express } from 'express';
import cors from 'cors';

function setServerCors(app: Express) {
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    }),
  );
}

export default setServerCors;
