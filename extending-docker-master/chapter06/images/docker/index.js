var http = require('http')
var args = require('minimist')(process.argv, {
  alias:{
    p:'port',
    r:'redis_host',
    v:'verbose'
  },
  default:{
    port:80
  },
  boolean:['verbose']
})

var RedisServer = require('./server')
var PostgresServer = require('./server-postgres')

// if any of these are set - then we use the postgres server
var postresEnvVars = [
  'USE_POSTGRES_PORT',
  'USE_POSTGRES_HOST',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD'
]

var useServer = RedisServer

postresEnvVars.forEach(function(varName){
  if(process.env[varName]){
    useServer = PostgresServer
  }
})

var server = http.createServer(useServer(args))

server.listen(args.port, function(){
  console.log('server listening on port: ' + args.port)
})