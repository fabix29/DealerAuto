# Stage 5: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 5: state, events, light/dark button, README and verification table)

## Key requests

### 1. State, events and the theme button
- Asked: follow the stage 5 guide (PDF) for my car dealership app: keep the list in state, add a checkbox and a delete button to every card, and add a button that switches between light and dark mode.
- Got: `App.jsx` with `useState` for the cars and for the theme, `handleToggleSold` and `handleDelete` (immutable updates with `map` and `filter`), the number of available cars as a derived value, and `handleTheme`, which writes `data-theme` on `<html>`. `CarList.jsx` passes the functions on, and `CarCard.jsx` has a controlled checkbox and a delete button with `aria-label`. In `App.css`, the dark theme works both with the system setting and with the button.
- Changed or rejected: I adapted the guide's example to my own theme: the red/graphite palette, a `--danger` color for the delete button, and a header button that moves above the title on narrow screens so it does not overlap it. I tested the page in the browser: I checked and unchecked a car, deleted all the cars to see the empty list message, and switched the theme with the system theme set to light and to dark. I also looked in the console (F12) and there were no warnings.

### 2. README and verification table
- Asked: update the README for stage 5 and prepare the verification table with the exact lines of code.
- Got: the "Stage 5: local state and events" section, the updated status list and a table with line ranges for `App.jsx`, `CarCard.jsx` and `App.css`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
I learned that the list of cars must live in state in `App` and that it is changed with a new array, using `map` and `filter` inside `setCars((prev) => ...)`, because `push` would not make React redraw the page. The number of available cars is not kept in state: it is computed from the list on every render, so it is always correct. In the card, `onClick` has to be `() => onDelete(car.id)`, otherwise the function runs immediately when the page loads.