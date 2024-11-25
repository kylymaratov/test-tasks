import './_path-register';

import express from 'express';
import setServerCors from '@/server/server-cors';
import startServer from '@/server/server-runner';
import setServerMiddlewares from './server/server-middlewares';

async function boootstap() {
  try {
    const app = express();

    setServerCors(app);
    setServerMiddlewares(app);
    await startServer(app);
  } catch (error) {
    console.error(`Server failed with error: ${error}`);
  }
}

boootstap();
