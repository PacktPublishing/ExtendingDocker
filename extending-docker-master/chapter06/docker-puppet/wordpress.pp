include 'docker'

docker::image { 'wordpress': }
docker::image { 'mysql': }

docker::run { 'wordpress':
  image           => 'wordpress',
  ports           => ['80:80'],
  links           => ['mysql:mysql'],
}

docker::run { 'mysql':
  image           => 'mysql',
  env             => ['MYSQL_ROOT_PASSWORD=password', 'FOO2=BAR2'],
}