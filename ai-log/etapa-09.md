# Stage 9: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 9: Express backend, validation, CORS, removing json-server, README and verification table)

## Key requests

### 1. Express backend
- Asked: follow the stage 9 guide (PDF) for my car dealership app: replace json-server with my own API in Node.js with Express, with the five REST routes, validation on the server, correct HTTP codes and error handling.
- Got: a `backend/` folder with `package.json` (`"type": "module"`, Express 5 and cors), `.env.example`, `.gitignore`, `src/server.js`, `src/app.js` (CORS, `express.json()`, `/health`, the router at `/cars`, a 404 route for unknown routes and a central error handler), `src/routes/cars.js` (GET list, GET by id, POST with 201, PATCH, DELETE with 204 and 404 for a missing car) and `src/validation.js` (checks the title, the fuel and the sold flag, and keeps only the known fields).
- Changed or rejected: the guide's example uses `/tasks`, and my route is `/cars`, with `FUELS` identical to `constants.js` in the frontend. The five cars from my old `db.json` are now the starting data in memory, with their `bodyType`, which the validation accepts as an optional field (SUV, Sedan or Hatchback), because the detail page shows it. The messages of the server are in English. I tested `validation.js` with Node on valid and invalid data, including a PATCH with extra fields such as `id`, which are ignored.

### 2. Connecting the frontend and removing json-server
- Asked: connect the React app to the new server and remove json-server from the project.
- Got: in `api.js`, the function `request` now reads `body.error` from the answer of the server, so the page shows the real message (for example "The car does not exist"); the message when loading fails now asks if the backend is running. The file `frontend/db.json` was removed from the project.
- Changed or rejected: I also removed the `api` script and the `json-server` package from `frontend/package.json` and ran `npm install` in `frontend/`, so that `package-lock.json` is up to date. In the backend I ran `npm install` as well, so that `backend/package-lock.json` exists and `npm ci` works on a clean clone.

### 3. README and verification table
- Asked: update the README for stage 9, with the new way to run the project and curl commands to test the routes, and prepare the verification table with the exact lines of code.
- Got: the "Stage 9: own backend" section with the routes and the curl commands, the new "How to run" with two terminals, the updated status list and a table with line ranges for `routes/cars.js`, `validation.js`, `app.js` and `api.js`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
An Express server is a chain of middleware functions: `cors()` and `express.json()` run first, then the router, then the 404 route, and at the end the function with four parameters that handles the errors, so the order matters. The browser blocks the requests between different ports (different origins) unless the server sends the right CORS header, and this can be fixed only on the server, with `CORS_ORIGIN`. The validation on the server is required because anyone can send data with curl without using the form, so the server checks everything and keeps only the known fields. Testing the routes with curl first shows if a problem is in the server or in the frontend, and the correct HTTP codes (200, 201, 204, 400 and 404) tell the client what happened.