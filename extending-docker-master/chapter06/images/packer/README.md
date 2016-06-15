## moby-counter

A simple app that is used to demonstrate keeping state inside a docker-compose app.

## run

```
$ docker-compose build
$ docker-compose up
```

This will expose the web application on port 80.

## Database backends

There are two versions of the moby app - one that saves data to Redis and one that saves it to Postgres.

### Redis

The default is to use the Redis connection - the envrionment variables that control this:

 * USE_REDIS_HOST
 * USE_REDIS_PORT

### Postgres

If any of the following variables are defined - it will force the app to use the Postgres backend:

 * USE_POSTGRES_HOST
 * USE_POSTGRES_PORT
 * POSTGRES_USER
 * POSTGRES_PASSWORD