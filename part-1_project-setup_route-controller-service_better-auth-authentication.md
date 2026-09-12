# will explain folder structure and what has been done and why___

part-1_project-setup_route-controller-service_better-auth-authentication

1. Initial Configuration as it is as of work-flow.md
2. Folder structure

/* Specialty Model & Prisma Schema  */
   - src
     - app
        - module
         - specialty
           - specialty.controller.ts
           - specialty.route.ts
           - specialty.service.ts
     - prisma
       - schema
         - specialty.prisma
         - schema.prisma

/* Better Auth Authentication */
   - src
     - app
       - module
         - auth
           - auth.controller.ts
           - auth.route.ts
           - auth.service.ts