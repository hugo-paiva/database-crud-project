const cmd=require('node-cmd')
cmd.run('npm start')

module.exports = {
  apps: [
    {
      script: 'server.js',
      args: 'start',
      cwd: './backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'app.js',
      args: 'start',
      cwd: './frontend/',
      name: 'Frontend',
      watch: true
    }
  ]
}