module.exports = {
  apps: [
    {
      name: 'fe-challange-8',
      script: 'node_modules/vite/bin/vite.js',
      args: 'serve',
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 3000, // ganti dengan port yang diinginkan
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000, // ganti dengan port yang diinginkan
      },
    },
  ],
};
