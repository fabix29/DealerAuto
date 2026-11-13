# Stage 7: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 7: form with validation, POST/PATCH/DELETE in `api.js`, `tw.json`, `data-testid`, README and verification table)

## Key requests

### 1. Form, validation and saving on the server
- Asked: follow the stage 7 guide (PDF) for my car dealership app: add a controlled form with validation, send the new car to the API, and move marking a car as sold and deleting it to the server.
- Got: `api.js` with the common `request` function and `fetchCars`, `createCar`, `updateCar` and `deleteCar`; `CarForm.jsx` (controlled fields, validation of the title: required and at most 100 characters, error message next to the form, button disabled while saving, fields cleared only after a successful save); and `App.jsx` with `handleAdd`, `handleToggleSold` and `handleDelete`, which first wait for the server and then change the state with the object it returns. The list went back to two columns in `App.css`.
- Changed or rejected: the guide's form example has `datatestid="form"` (without the dash), and I wrote `data-testid="form"`, so the attribute really exists. I kept the theme button from stage 5. The error from loading the data keeps the message from stage 6 ("Is npm run api running?"), and the errors from marking and deleting have their own messages. The error on the page is cleared before a new mark or delete, so an old message does not stay on the screen.

### 2. Automatic check: `tw.json` and `data-testid`
- Asked: add the file and the attributes needed for the automatic check, adapted to my theme.
- Got: `tw.json` in the root of the repository (`resource` is `cars`, `title` is `title`, `done` is `sold`, and `sample` has the fuel) and the `data-testid` attributes on the form (`form`, `form-title`, `form-fuel`, `form-submit`, `form-error`), on the card (`item`, `item-title`, `item-toggle`, `item-delete`), on the empty list message (`empty`) and on the messages of the page (`loading`, `error`).
- Changed or rejected: the second form field is called `form-fuel`, because the field in `db.json` is `fuel`, as the guide says (`form-<field>`).

### 3. README and verification table
- Asked: update the README for stage 7 and prepare the verification table with the exact lines of code.
- Got: the "Stage 7: form and validation" section, the updated status list and a table with line ranges for `CarForm.jsx`, `App.jsx`, `api.js` and `CarCard.jsx`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
In a controlled form every field has `value` and `onChange`, so the React state is the only source of truth, and `e.preventDefault()` stops the page from reloading when the form is sent. I learned to wait for the server first and to change the list only with the car it returns, so the id comes from the server and the screen shows only what was really saved. If saving fails, the text stays in the field and the error is shown next to the form, and the button is disabled while sending so a double click cannot add the car twice. The `data-testid` attributes do not change the look of the page: they only mark the elements for the automatic check.