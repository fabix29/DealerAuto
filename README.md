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

☐ Stage 2: data logic in JavaScript