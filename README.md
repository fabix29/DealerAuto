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
