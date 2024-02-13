module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'icts-backend',
      script    : 'npm',
      args      : 'run develop',
    },
  ],
}


