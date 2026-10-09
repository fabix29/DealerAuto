# Stage 2: AI log
 
## Tools
- Claude (claude.ai chat)
## Conversations
- # Stage 2: AI log
 
## Tools
- Claude (claude.ai chat)
## Conversations
- <share link> (stage 2: JavaScript data logic for DealerAuto, `dealer.js`, README and checklist)
## Key requests
 
### 1. Data and functions in `dealer.js`
- Asked: implement stage 2 from the guide (PDF) for my car dealership app: an array of objects with ids, the allowed fuel values, and functions for listing titles, counting available cars, searching by title, adding with validation, toggling the sold state and deleting.
- Got: a `dealer.js` file with the array `cars`, the constant `FUELS`, the functions `listTitles`, `countAvailable`, `searchByTitle`, `nextId`, `addCar`, `toggleSold` and `deleteCar`, and console tests grouped in four sections. None of the functions changes the list it receives: they use `map`, `filter` and the spread operator.
- Changed or rejected: the guide's example objects have no category, so the cars have only `id`, `title`, `sold` and `fuel` for now; body type and user come in later stages. The validation also checks the 100-character limit written in my README, in addition to the empty title and the invalid fuel from the guide.
### 2. README and verification table
- Asked: update the README for stage 2 and prepare the verification table with the exact lines of code.
- Got: the "Stage 2: data logic" section, the updated status list, an updated AI usage row, and a table with line ranges for `dealer.js` and `index.html`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing the code, and publish the table in a separate commit.

## What I learned / what did not work(stage 2: JavaScript data logic for DealerAuto, `dealer.js`, README and checklist)

- Why the functions return a new list instead of changing the old one, what `map`, `filter`, `find` and `reduce` do, why `nextId` uses `reduce` and not `list.length + 1`, how you read the messages in the console