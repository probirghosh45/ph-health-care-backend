# Part 1 — Project Setup, Route-Controller-Service & Better Auth Authentication

> This document explains the folder structure, what has been done, and why.

## Branch

`part-1_project-setup_route-controller-service_better-auth-authentication`

---

## 1. Initial Configuration

Initial project configuration has been completed as documented in `work-flow.md`.

---

## 2. Folder Structure

### Specialty Prisma Schema & Model

```text
root directory
 └── prisma
      └── schema
           └── specialty.prisma

src
└── module
    └── specialty
        ├── specialty.controller.ts
        ├── specialty.route.ts
        └── specialty.service.ts
```

### Better Auth Authentication

```text
root directory
 └── prisma
      └── schema
           └── auth.prisma

src
└── app
    ├── lib
    │   └── auth.ts
    │
    └── module
        └── auth
            ├── auth.controller.ts
            ├── auth.route.ts
            └── auth.service.ts
```

---

## 3. Specialty Prisma Schema

The Prisma schema is separated into different files to keep the schema organized as the project grows.

### `prisma/schema/specialty.prisma`

Contains the Prisma model related to `Specialty`.

Example:

```prisma
model Specialty {
  id          String    @id @default(uuid(7))
  title       String    @unique @db.Text
  description String?   @db.Text
  icon        String?   @db.VarChar(255)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  isDeleted   Boolean   @default(false)
  deletedAt   DateTime?

  @@index([title], name: "specialty_title_index")
  @@index([isDeleted], name: "specialty_isDeleted_index")
  @@map("specialties")
}
```

### `schema.prisma`

Acts as the main Prisma schema file and combines the individual schema files.

This approach makes it easier to manage multiple models instead of keeping every model inside one large schema file.


---


## 4. Specialty Module

The Specialty module is organized using a **Route → Controller → Service** architecture.

### `specialty.route.ts`

Defines the API routes related to specialties.

The route receives the HTTP request and passes it to the appropriate controller.

```text
Request
   ↓
Route
   ↓
Controller
```

### `specialty.controller.ts`

Handles the HTTP request and response.

The controller is responsible for:

* Receiving request data
* Calling the service
* Sending the response to the client

```text
Route
   ↓
Controller
   ↓
Service
```

### `specialty.service.ts`

Contains the business logic for the Specialty module.

The service communicates with Prisma/database operations instead of putting database logic directly inside the controller.

```text
Controller
   ↓
Service
   ↓
Prisma
   ↓
Database
```

This separation keeps the code organized and easier to maintain.

---

## 5. Better Auth Authentication

Better Auth was added to handle authentication in the application.

### Resources

* Step 1–6: https://better-auth.com/docs/installation
* Next Step — Generate: https://better-auth.com/docs/concepts/cli

### Installation

```bash
npm install better-auth
```

### Generate Better Auth Schema

```bash
npx auth@latest generate --output ./prisma/schema/auth.prisma --config ./src/app/lib/auth.ts
```

A separate `auth` module has been created for authentication-related functionality.

### `lib`

The `lib` directory contains shared application-level configuration and setup.

```text
lib
└── auth.ts
```

### `auth.ts`

Contains the Better Auth configuration and authentication setup.

It is responsible for configuring authentication and connecting Better Auth with the required database layer.

### `module/auth`

The `auth` module contains authentication-related route, controller, and service files.

```text
auth
├── auth.controller.ts
├── auth.route.ts
└── auth.service.ts
```

### `auth.route.ts`

Defines authentication-related API routes.

### `auth.controller.ts`

Handles authentication-related HTTP requests and responses.

### `auth.service.ts`

Contains authentication-related business logic and communicates with the required authentication/database layer.

The overall authentication flow is:

```text
Request
   ↓
Auth Route
   ↓
Auth Controller
   ↓
Auth Service
   ↓
Better Auth
   ↓
Database
```

---

## 6. User Model Schema Updated

The `User` model schema has been updated with additional user management fields.

### `UserStatus`

Used to represent the current status of a user.

### `Role`

Used to define the user's role/permission level in the system.

The following were added:

* `UserStatus`
* `Role`

These fields will be used later for authentication, authorization, and role-based access control.

---

## 7. Overall Architecture

The current backend structure follows a modular architecture.

For a typical module:

```text
Client
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Prisma / Better Auth
  ↓
Database
```

This separation helps keep:

* **Routes** responsible for API endpoints
* **Controllers** responsible for HTTP request/response handling
* **Services** responsible for business logic
* **Prisma** responsible for database operations
* **Better Auth** responsible for authentication
* **Modules** responsible for organizing related functionality

As the project grows, new modules can be added without putting everything into a single large file.  