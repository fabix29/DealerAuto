# Stage 4: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 4: `CarCard` and `CarList` components, README and verification table)

## Key requests

### 1. Components built from data
- Asked: follow the stage 4 guide (PDF) for my car dealership app: replace the raw JSON list with two components, one for a single car and one for the whole list.
- Got: `CarCard.jsx` (receives one `car` through props, shows the title, the fuel tag and the Available/Sold status, and adds the class `done` for sold cars), `CarList.jsx` (returns a message when the list is empty, otherwise renders the cards with `map` and `key={car.id}`), the list used in `App.jsx`, and a small `.empty` rule in `App.css` for the empty message.
- Changed or rejected: <you set the array to `[]` to see the empty message, removed `key` once to see the warning, or changed a `sold` value>

### 2. README and verification table
- Asked: update the README for stage 4 and prepare the verification table with the exact lines of code.
- Got: the "Stage 4: components" section, the updated status list and a table with line ranges for `CarCard.jsx` and `CarList.jsx`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
<What props are, why `key` uses the id and not the position, how the empty list message is shown>