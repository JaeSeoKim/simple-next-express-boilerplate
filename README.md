# Simple Next.js + Custom Express Server Boilerplate

`/api` -> `Express Server`

`*` -> `Next RequestHandler`

---

### Script

- dev - Next Dev (`nodemon --exec babel-node server/server.js`)
- dev:api - Only `/api` requests work (`nodemon --exec babel-node server/server-dev-api.js`)
- build - Next Build (`next build`)
- start - Next Start (`cross-env NODE_ENV=production babel-node server/server.js`)

---

### File Tree

```
.
├── README.md
├── lib
│   └── utils
│       └── useRequest.js
├── next.config.js
├── nodemon.json
├── package.json
├── pages
│   ├── [id].js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   └── robots.txt
├── server --> for Express.js (/API)
│   ├── api
│   │   └── user
│   │       └── getUser.js
│   ├── middlewares
│   ├── routes
│   │   ├── apiRouter.js
│   │   └── userRouter.js
│   ├── server-dev-api.js
│   └── server.js
└── yarn.lock

```
