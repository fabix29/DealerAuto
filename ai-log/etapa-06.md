# Stage 6: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 6: json-server API, `api.js`, loading and error states, README and verification table)

## Key requests

### 1. Data from a mock API
- Asked: follow the stage 6 guide (PDF) for my car dealership app: move the data to a json-server API and load it in React with `useEffect`, with a loading state and an error state.
- Got: `db.json` with five cars (the `cars` route), `api.js` with `fetchCars` (checks `res.ok` and reads the address from `VITE_API_URL`), `.env.example`, and an `App.jsx` that starts with an empty list, loads the cars once with `useEffect` (cleaned up with `ignore`) and shows "Loading cars...", the list, or an error message that tells me to run `npm run api`. In `App.css` there are the `.info` and `.error` styles, with the colors as variables for both themes.
- Changed or rejected: I kept the theme button from stage 5 in `App.jsx`, because the guide's final file does not include it. I installed `json-server@0.17.4` and added the `api` script to `package.json` myself. At first I ran the install in the root folder of the repository and not in `frontend/`, so I deleted the extra `package.json`, `package-lock.json` and `node_modules` from the root and ran it again in `frontend/`. I also renamed the file `.env.exemple` to `.env.example`.

### 2. README and verification table
- Asked: update the README for stage 6, with the two terminals, and prepare the verification table with the exact lines of code.
- Got: the "Stage 6: data from a mock API" section, the new "How to run", the updated status list and a table with line ranges for `App.jsx` and `api.js`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
`useEffect` with `[]` runs the request once, after the first render, and every load has three states: loading, success and error, so the page is never empty. `fetch` does not fail on a 404 or 500, so I have to check `res.ok`. The checks and deletions are lost on refresh because they change only the state in React, not the data on the server. What did not work at first: I ran `npm install` in the wrong folder, which created thousands of files for Git, and I made a typo in a command (`nmp` instead of `npm`).