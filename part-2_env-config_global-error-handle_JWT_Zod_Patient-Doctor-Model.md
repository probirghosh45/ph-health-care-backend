# PH Healthcare Backend — Project Workflow

## 1. Create the Part 2 Branch

Create a new branch named:

```text
part-2_env-config_global-error-handle_JWT_Zod_Patient-Doctor-Model
```

Push the changes to the remote repository.

---

## 2. Added / Updated File Paths

The following files have been added or updated as part of Part 2:

```text
src
└── app
    ├── config
    │   └── env.ts
    │
    ├── middleware
    │   ├── notFound.ts
    │   └── globalErrorHandler.ts
    │
    ├── shared
    │   ├── catchAsync.ts
    │   └── sendResponse.ts
    │
    └── module
        └── specialty
            └── specialty.controller.ts [updated]

prisma7.config.ts
tsconfig.json
app.ts
```

---

## 3. Added / Updated Files

### `src/app/config/env.ts`

Added centralized environment variable configuration and validation.

This file loads required environment variables such as:

* `NODE_ENV`
* `PORT`
* `DATABASE_URL`
* `BETTER_AUTH_SECRET`
* `BETTER_AUTH_URL`

It ensures that required environment variables are available before the application starts.

---

### `src/app/middleware/notFound.ts`

Added a global middleware for handling requests to undefined or non-existing API routes.

If a requested route does not exist, it returns a standardized response instead of leaving the request unresolved.

Example:

```text
/api/v1/unknown-route
```

returns a `404 Not Found` response.

---

### `app.ts`

Updated the main Express application to register the `notFound` middleware.

The middleware is placed after the application's registered routes so that it can handle requests that do not match any existing route.

Again updated the main Express application to register the `globalErrorHandler` middleware.

---

### `src/app/middleware/globalErrorHandler.ts`

Added a centralized global error-handling middleware.

It receives errors forwarded through:

```ts
next(error)
```

and handles them in one common location.

This helps maintain consistent error responses across the application and avoids repeating error-handling logic in individual controllers.

---

### `src/app/shared/catchAsync.ts`

Added an asynchronous error-handling utility.

`catchAsync` wraps asynchronous controllers and automatically catches errors from them.

Instead of writing repetitive `try...catch` blocks inside every async controller:

```ts
try {
    // controller logic
} catch (error) {
    next(error);
}
```

controllers can be wrapped with:

```ts
catchAsync(...)
```

Any caught error is forwarded to the global error handler through:

```ts
next(error);
```

---

### `src/app/shared/sendResponse.ts`

Added a centralized response utility for sending API responses in a consistent format.

The helper handles common response properties such as:

* HTTP status code
* Success status
* Message
* Response data

Example response structure:

```json
{
    "success": true,
    "message": "Data retrieved successfully",
    "data": []
}
```

This prevents repeated response formatting logic across controllers.

---

### `src/app/module/specialty/specialty.controller.ts`

Updated the specialty controller to use the shared:

```text
catchAsync
sendResponse
```

helper functions.

`catchAsync` handles asynchronous controller errors, while `sendResponse` provides a consistent API response structure.

Using these helpers centralizes error-handling and response-handling logic and reduces repetitive code inside controllers.

---

### `prisma7.config.ts`

Updated the Prisma 7 configuration.

The database `url` configuration was updated to use the application's environment-based database configuration.

---

### `tsconfig.json`

Updated the TypeScript configuration:

* Updated `rootDir`
* Updated `include`
* Updated `exclude`

These changes ensure that TypeScript correctly identifies the project's source files and compilation boundaries.

---

## 4. Part 2 Development Scope

Part 2 focuses on the following backend features:

* Environment configuration
* Global error handling
* JWT authentication
* Zod validation
* Patient model
* Doctor model
* Related backend configuration and middleware

---

## 5. Error Handling & Response Flow

The application follows a centralized error-handling and response-handling approach:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
catchAsync
   ↓
Service
   ↓
Database
   ↓
Success ───────────────→ sendResponse()
   │
   │
   └── Error
        ↓
    next(error)
        ↓
globalErrorHandler
        ↓
    Error Response
```

This approach keeps controllers clean, reduces code repetition, and provides a consistent structure for handling errors and API responses throughout the application.
