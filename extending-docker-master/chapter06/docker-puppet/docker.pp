include 'docker'

docker::image { 'russmckendrick/base': }

docker::run { 'helloworld':
  image   => 'russmckendrick/base',
  command => '/bin/sh -c "while true; do echo hello world; sleep 1; done"',
}