# PH Healthcare Backend — Project Workflow

## Initial Setup

### 1. Initialize the Project

Initialize the project.

### 2. Create `.gitignore`

Create a `.gitignore` file and add the following lines:

```gitignore
node_modules
.env
.env.*
dist
!.env.example
```

### 3. Initialize Git Repository

Run `git init` in the project directory.

Create a branch named `development` and push the changes to the remote repository.

```bash
git init
```

### 4. Create the Part 1 Branch

Create a new branch named:

```text
part-1_project-setup_route-controller-service_better-auth-authentication
```

Push the changes to the remote repository.

### 5. Initialize npm

Initialize the Node.js project:

```bash
npm init
```

### 6. Configure TypeScript

Install Express and the required TypeScript dependencies:

```bash
npm install express
npm install -D typescript @types/node @types/express
```

Initialize the TypeScript configuration:

```bash
npx tsc --init
```

Replace the generated `tsconfig.json` with:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Reference: [Setting Up an Express TypeScript Server](https://dev.to/justwonder/setting-up-an-express-typescript-server-a-step-by-step-guide-gic)

### 7. Install `tsx`

Install `tsx` as a development dependency:

```bash
npm install -D tsx
```

From the blog's **Step 5 & 6**, configure `server.ts` and `package.json` scripts slightly differently.

We are using:

```bash
tsx watch src/server.ts
```

to run the server in development mode.

### 8. Create `app.ts`

Create a new file named `app.ts` inside the `src` directory.

Move the Express app initialization and middleware setup from `server.ts` to `app.ts`.

Export the Express app from `app.ts` and import it into `server.ts`.

---

## Environment Configuration

### 9. Create `.env`

Create a `.env` file in the root directory and add:

```env
PORT=5000
```

### 10. Create `.env.example`

Create a `.env.example` file in the root directory and add:

```env
PORT=5000
```

---

## ESLint Configuration

### 11. Configure ESLint

Add ESLint configuration to the project.

Create a file named:

```text
eslint.config.mjs
```

in the root directory.

Follow the steps from the official TypeScript ESLint documentation:

https://typescript-eslint.io/getting-started/#step-1-installation

---

## Prisma Configuration

### 12. Configure Prisma

Configure Prisma by following the Prisma ORM with Prisma Postgres documentation:

https://www.prisma.io/docs/v7/prisma-postgres/quickstart/prisma-orm

### 13. Initialize Prisma Database

Initialize Prisma and create the Prisma Postgres database:

```bash
npx prisma init --db --output ../generated/prisma
```

### 14. Configure the Database URL

Update the `.env` file with the database URL generated from Prisma Cloud.

### 15. Add Prisma Scripts

Add the following Prisma-related scripts to `package.json`:

```json
{
  "scripts": {
    "studio": "npx prisma studio",
    "migrate": "npx prisma migrate",
    "generate": "npx prisma generate",
    "db-push": "npx prisma db push",
    "db-pull": "npx prisma db pull"
  }
}
```
