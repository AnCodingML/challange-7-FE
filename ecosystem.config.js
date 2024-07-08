module.exports = {
   apps: [
     {
       name: 'vite-app',
       script: 'node_modules/vite/bin/vite.js',
       args: 'serve',
       env: {
         NODE_ENV: 'development',
       },
       env_production: {
         NODE_ENV: 'production',
       },
     },
   ],
 };
 