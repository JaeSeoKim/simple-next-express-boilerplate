# Simple Next.js + Custom Express Server Boilerplate

> TypeScript Version: [simple-type-next-express-boilerplate](https://github.com/JaeSeoKim/simple-type-next-express-boilerplate)

`/api` -> `Express Server`

`*` -> `Next RequestHandler`

---

### Script

- dev - Next Dev (`nodemon --exec babel-node server/server.js`)
- dev:api - Only `/api` requests work (`nodemon --exec babel-node server/server-dev-api.js`)
- build - Next Build (`next build`)
- start - Next Start (`cross-env NODE_ENV=production babel-node server/server.js`)
- pm2 - Run with pm2 Cluster Mode (`pm2 start ecosystem.config.js --env production`)
- pm2:dev - Run with pm2 Cluster Mode(dev) (`pm2 start ecosystem.config.js`)

---

### Docker

Default Tag: `simple-next-express`

Test Run Command: `docker run -p 3000:3000 simple-next-express`

- build - `./cicd/build.sh`
- build(with pm2) - `./cicd/build-pm2.sh`

---

### File Tree

```
.
├── LICENSE
├── README.md
├── cicd
│   ├── Dockerfile
│   ├── Dockerfile-pm2
│   ├── build-pm2.sh
│   └── build.sh
├── ecosystem.config.js
├── lib
│   └── utils
│       └── useRequest.js
├── next.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── pages
│   ├── [id].js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   └── robots.txt
├── server
│   ├── api
│   │   └── user
│   │       └── getUser.js
│   ├── middlewares
│   ├── routes
│   │   ├── apiRouter.js
│   │   └── userRouter.js
│   ├── server-dev-api.js
│   └── server.js
└── server-register.js
```

### ToDo

- ETC...
