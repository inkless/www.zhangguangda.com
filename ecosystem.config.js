module.exports = {
  apps : [{
    name: 'www.zhangguangda.com',
    script: 'bin/www',

    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'www',
      host : 'do',
      ref  : 'origin/master',
      repo : 'git@github.com:inkless/www.zhangguangda.com.git',
      path : '/var/www/www.zhangguangda.com',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
