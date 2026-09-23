# PH Healthcare Backend — Project Workflow

### 1. Create the Part 2 Branch

Create a new branch named:

```text
part-2_env-config_global-error-handle_JWT_Zod_Patient-Doctor-Model
```

Push the changes to the remote repository.

### 2. Updated File Paths

The following files have been created or updated initially:

```text
src
└── app
    ├── config
    │   └── env.ts
    │
    └── middleware
        └── notFound.ts

prisma7.config.ts
tsconfig.json
```

### 3. File Updates

#### `src/app/config/env.ts`

Contains the centralized environment variable configuration and validation for the application.

#### `src/app/middleware/notFound.ts`

Contains the global middleware for handling requests to undefined/non-existing API routes.

#### `app.ts`

Add notFound middleware to the Express application.

#### `tsconfig.json`

Updated TypeScript configuration:

* Updated `rootDir`
* Updated `include`
* Updated `exclude`

#### `prisma7.config.ts`

Updated the Prisma configuration:

* Updated the database `url` configuration.

### 4. Part 2 Development Scope

Part 2 focuses on the following backend features:

* Environment configuration
* Global error handling
* JWT authentication
* Zod validation
* Patient model
* Doctor model
* Related backend configuration and middleware

