<!-- Initial Setup -->

1. Initialize the project
2. Create a .gitignore file and add the following lines to it:
   ```
   node_modules
   .env
   .env.*
   dist
   !.env.example
   ```
3. Run `git init` in the project directory and create a branch named `development` , push the changes to the remote repository.

4. create new branch named "part-1_project-setup_route-controller-service_better-auth-authentication" and push the changes to the remote repository.

4. npm init

5. tsconfig.json -> https://dev.to/justwonder/setting-up-an-express-typescript-server-a-step-by-step-guide-gic

> npm install express
> npm install -D typescript @types/node @types/express
> npx tsc --init
> replace tsconfig.json with the below code_
{
  "compilerOptions": {
    "module": "commonjs",                                
    "rootDir": "./src",
    "outDir": "./dist",   
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
}

6. > npm i tsx -D

7. From Blog -> Step 5 & 6 Configure server.ts and package.json scripts slightly different from the blog, as we are using  and `tsx watch src/server.ts` for running the server in development mode.


___

8. Create a new file named `app.ts` in the `src` directory and move the express app initialization and middleware setup from `server.ts` to `app.ts`. Export the app from `app.ts` and import it in `server.ts`.


9. Create a `.env` file in the root directory and add the following line to it:
```
PORT=5000
```
10. Create a `.env.example` file in the root directory and add the following line to it:
```
PORT=5000
```
___

<!-- ESLint Configuration -->

11. add eslint configuration to the project. Create a file named `eslint.config.mjs` in the root directory by following the steps mentioned in the documentation: https://typescript-eslint.io/getting-started/#step-1-installation


___

<!-- Prisma Configuration -->
12. by following the steps mentioned in the documentation: https://www.prisma.io/docs/v7/prisma-postgres/quickstart/prisma-orm

13. store data in prisma database by following the steps _
-> npx prisma init --db --output ../generated/prisma

14. update .env file with the database url generated from prisma cloud.
___




