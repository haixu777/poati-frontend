var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  interfaceUrl: 'http://10.10.28.40:8080/iie-icm/api'
})
