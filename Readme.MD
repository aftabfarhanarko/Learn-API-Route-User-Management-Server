project-root/
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── prisma/
│   └── schema.prisma
│
└── src/
    ├── index.ts                  // server startup
    ├── server.ts                 // Express app setup
    ├── config/
    │   └── env.ts                // .env variables load & validate
    ├── middlewares/
    │   ├── auth.middleware.ts     // JWT authentication guard
    │   ├── error.middleware.ts    // global error handler
    │   └── validate.middleware.ts // request validation (Joi)
    ├── modules/
    │   └── user/
    │       ├── user.controller.ts
    │       ├── user.interface.ts
    │       ├── user.route.ts
    │       ├── user.service.ts
    │       └── user.validation.ts
    └── utils/
        ├── bcrypt.ts
        ├── jwt.ts
        ├── prisma.ts
        └── sendResponse.ts