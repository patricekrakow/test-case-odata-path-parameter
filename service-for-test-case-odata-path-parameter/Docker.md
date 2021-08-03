```text
$ ls
Docker.md  Dockerfile  app.js  node_modules  package-lock.json  package.json

$ docker --version
Docker version 20.10.7, build f0df350

$ docker build --tag patrice1972/service-for-test-case-odata-path-parameter:1.0.0 .
...
Successfully built 74d95464c814
Successfully tagged patrice1972/service-for-test-case-odata-path-parameter:1.0.0

$ docker images
REPOSITORY                                               TAG            IMAGE ID       CREATED          SIZE
patrice1972/service-for-test-case-odata-path-parameter   1.0.0          74d95464c814   25 seconds ago   182MB
...

$ docker run --publish 3000:3000 --detach patrice1972/service-for-test-case-odata-path-parameter:1.0.0
c3bcef7ab91679a39ff7a6b0278382b461dac73ac434a74fdf83c122a4c6a06a

$ docker ps
CONTAINER ID   IMAGE                                                          COMMAND                  CREATED          STATUS          PORTS                                       NAMES
c3bcef7ab916   patrice1972/service-for-test-case-odata-path-parameter:1.0.0   "docker-entrypoint.s…"   23 seconds ago   Up 22 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   charming_bhabha

$ curl "localhost:3000/thingies('1001')"
{"id":1001,"message":"Hello!"}

$ docker rm --force c3bcef7ab916
c3bcef7ab916

$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

$ docker login
...
Login Succeeded

$ docker push patrice1972/service-for-test-case-odata-path-parameter:1.0.0
...
1.0.0: digest: sha256:2d66e66f7566f79a9f8aa1b5e177744da338dc0448b11aa7788e782d1383622f size: 2202
```

<https://hub.docker.com>
