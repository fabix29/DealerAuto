# DealerAuto

A web app for a car dealership: it keeps track of the cars in stock and shows at a glance which ones are still available and which are sold. Meant for the dealership's sales agents.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
|Car Name| text | required, max 100 chars |
| Sold | boolean | toggled from the list, default false |
| Feul | fixed values | Gas, Diesel, Electric |
| Body Type | relation | SUV, Sedan, Hatchback |
| User | relation | the sales agent who owns the listing |

Sample data used across all stages:
1. Dacia Duster 2021, available, Diesel (SUV)
2. Volkswagen Golf 2019, sold, Gas (Hatchback)
3. Tesla Model 3 2022, available, Electric (Sedan)
## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Claude | Generating initial README structure. |

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Verification table

| ID    | Requirement                                           | Where (permalink)                                                                                                | How to check          |
| ----- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| S1-R1 | README: description, fields, sample data, how to run  | [README.md](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/README.md?plain=1#L1-L30)                                            | read                  |
| S1-R2 | AI usage section                                      | [README.md](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/README.md?plain=1#L1-L30)                                            | read                  |
| S1-R3 | AI log for stage 1                                    | [ai-log/etapa-01.md](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/ai-log/etapa-01.md?plain=1#L1-L27)                          | read                  |
| S1-R4 | header, form (text + select), 3 cards with own data   | [index.html#L10-L59](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/index.html#L10-L59)                          | open the page         |
| S1-R5 | finished card looks different                         | [style.css#L202-L207](https://github.com/fabix29/DealerAuto/blob/7d319b0a4a10aa0e3aaf4dfcea743796a0daf8b4/style.css#L202-L207) (.done)                | look at the card      |
| S1-R6 | 2 columns on desktop, 1 under 700px                   | [style.css#L85-L93](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/style.css#L85-L93), [#L224-L226](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/style.css#L224-L226) (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme                    | [style.css#L24-L38](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/style.css#L24-L38), [#L218-L221](https://github.com/fabix29/DealerAuto/blob/15ae86093a2db49c735ef6f04d4f59ddef034636/style.css#L218-L221) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed                               | link to the commit: https://github.com/fabix29/DealerAuto/commits/main/<commit>                                             | commit history        |

## Stage 2: data logic
Plain JavaScript, no DOM. `delaer.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Claude | Drafting the HTML/CSS (stage 1) and the JavaScript functions (stage 2). |

Details per stage: see the ai-log/ folder.

# Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Verification table: Stage 2
 
| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S2-R1 | JS file linked, logs on page load | [index.html#L64](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/index.html#L64) (script) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [delaer.js#L5-L12](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/dealer.js#L5-L12) | read |
| S2-R3 | list, count, search, add, toggle, delete | [dealer.js#L15-L58](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/dealer.js#L15-L58) (functions), [dealer.js#L61-L76](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/dealer.js#L61-L76) (tests) | console output |
| S2-R4 | add rejects empty name and invalid tag | [dealer.js#L34-L46](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/dealer.js#L34-L46) (checks) | last 2 console lines |
| S2-R5 | original array unchanged after add | [dealer.js#L69](https://github.com/fabix29/DealerAuto/blob/84d1fb4611fb984187fbe3502325a880e5642271/dealer.js#L69) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/fabix29/DealerAuto/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/fabix29/DealerAuto/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit](https://github.com/fabix29/DealerAuto/commits/main/) | commit history |

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.
The static pages from stages 1 and 2 are kept in `mockup/`.
## How to run
```
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (http://localhost:5173).
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Claude | Generate the checktable |
 
Details per stage: see the ai-log/ folder.
 
## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [ ] Stage 4: components built from data

## Verification table: Stage 3

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/fabix29/DealerAuto/blob/main/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L8-L18](https://github.com/fabix29/DealerAuto/blob/0a11ed539a5bc4ebc0584e96fc5facd8f24ae6c8/frontend/src/App.jsx#L8-L18) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5](https://github.com/fabix29/DealerAuto/blob/0a11ed539a5bc4ebc0584e96fc5facd8f24ae6c8/frontend/src/App.jsx#L1-L5) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/fabix29/DealerAuto/blob/main/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/fabix29/DealerAuto/blob/main/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](https://github.com/fabix29/DealerAuto/blob/main/README.md), [ai-log/etapa-03.md](https://github.com/fabix29/DealerAuto/blob/main/ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [commit](https://github.com/fabix29/DealerAuto/commits/main/) | commit history |

## Stage 4: components
The list is rendered from the data, through two components:
- `CarList` receives the whole array and renders one card per item
- `CarCard` receives a single item through props and displays it
## How to run
```
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (http://localhost:5173).
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Claude | Generating initial README structure; drafting the HTML/CSS (stage 1), the JavaScript functions (stage 2) and the React files (stages 3 and 4). |
 
Details per stage: see the ai-log/ folder.
 
## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

## Verification table: Stage 4

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/fabix29/DealerAuto/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [CarCard.jsx#L4-L16](https://github.com/fabix29/DealerAuto/blob/107603ed2e807654666b9b11e2daa09d78130c79/frontend/src/components/CarCard.jsx#L4-L16) | read |
| S4-R3 | map + key={id}, no console warnings | [CarList.jsx#L10-L12](https://github.com/fabix29/DealerAuto/blob/107603ed2e807654666b9b11e2daa09d78130c79/frontend/src/components/CarList.jsx#L10-L12) | F12, Console |
| S4-R4 | message for empty list | [CarList.jsx#L4-L6](https://github.com/fabix29/DealerAuto/blob/107603ed2e807654666b9b11e2daa09d78130c79/frontend/src/components/CarList.jsx#L4-L6) | set array to [] |
| S4-R5 | state changes the card look | [CarCard.jsx#L6](https://github.com/fabix29/DealerAuto/blob/107603ed2e807654666b9b11e2daa09d78130c79/frontend/src/components/CarCard.jsx#L6) | toggle a sold flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/fabix29/DealerAuto/blob/main/README.md), [ai-log/etapa-04.md](https://github.com/fabix29/DealerAuto/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit](https://github.com/fabix29/DealerAuto/commits/main/) | commit history |

## Stage 5: local state and events
The list lives in React state. Marking cars as sold and deleting them work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.
## How to run
```
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (http://localhost:5173).
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Claude | Generating initial README structure; drafting the HTML/CSS (stage 1), the JavaScript functions (stage 2) and the React files (stages 3, 4 and 5). |
 
Details per stage: see the ai-log/ folder.
 
## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API