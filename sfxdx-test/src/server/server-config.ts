import { config } from 'dotenv';

config();

interface ServerConfig {
  node_env: NodeJS.ProcessEnv;
  is_prod: boolean;
  port: number;
  db_url: string;
  api_v: 'v1';
}

const serverConfig: ServerConfig = {
  node_env: process.env,
  is_prod: process.env.NODE_ENV === 'production',
  port: Number(process.env.PORT) || 3001,
  db_url: process.env.DB_URL || '',
  api_v: 'v1',
};

export default serverConfig;
