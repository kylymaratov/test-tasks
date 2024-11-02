import { i18n } from './next-i18next.config';
import * as path from 'path';

const nextConfig = {
  i18n,
  webpack: (config: any) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    return config;
  },
};

export default nextConfig;
