import * as path from 'path';

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    return config;
  },
};

export default nextConfig;
