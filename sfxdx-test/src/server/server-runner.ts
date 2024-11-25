import { Express } from 'express';
import serverConfig from './server-config';
import connectDatabase from '@/database/connect';
import Infura from '@/infura';
import contractData from '@/contracts/0x2CbD217895fB88eE3db0F7eC1168a3D8592ecDDa.json';

async function beforeStart() {
  await connectDatabase(serverConfig.db_url);
  const infura = new Infura(
    serverConfig.node_env.INFURA_API_KEY || '',
    contractData.abi,
    contractData.contract_id,
  );

  await infura.syncOrders();
  infura.listenOrders();
}

function afterStart() {
  console.info(`Server running on port: ${serverConfig.port}`);
}

async function startServer(app: Express) {
  await beforeStart();

  app.listen(serverConfig.port, afterStart);
}

export default startServer;
