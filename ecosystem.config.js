module.exports = {
  apps: [
    {
      name: 'server',
      script: './server-register.js',
      instances: 0,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      env: {
        PM2: 'PM2',
        NODE_ENV: 'development'
      },
      env_production: {
        PM2: 'PM2',
        NODE_ENV: 'production'
      }
    }
  ]
}
