# Stage 8: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (stage 8: React Router, layout, detail page, 404 page, CSS Modules, README and verification table)

## Key requests

### 1. Routes, layout and pages
- Asked: follow the stage 8 guide (PDF) for my car dealership app: split the app into pages with React Router (the list, a detail page, an about page and a 404 page), with a common layout.
- Got: `main.jsx` with `BrowserRouter`; `App.jsx` with only the route map (`/`, `/cars/:id`, `/about` and `*`); `Layout.jsx` with the header, the `NavLink` navigation, `Outlet` and the footer; `CarsPage.jsx` with the state, the effect and the functions that were in `App.jsx` in stage 7; `CarDetailPage.jsx`, which reads the id with `useParams`, asks the server for that car with `fetchCar(id)` and shows an error message if the car does not exist; `AboutPage.jsx` and `NotFoundPage.jsx`. In the card, the title is now a `Link` to the detail page.
- Changed or rejected: the guide's example uses `/tasks/:id`, and my route is `/cars/:id`, because the resource in `tw.json` is `cars`. I kept the theme button from stage 5, moved into `Layout.jsx` because the header is now common to all pages, and the counter of cars moved from the header into the panel with the list. I added the field `bodyType` to the cars in `db.json` (it is in my data model) and the detail page shows it, with "Not set" for the cars added from the form, which do not have it. I did not call `setLoading(true)` and `setError(null)` at the start of the effect in the detail page, as the guide's note says.

### 2. CSS Modules
- Asked: move the styles next to the components, with CSS Modules, and keep only the variables and the shared classes in the global file.
- Got: `index.css` (variables for both themes, base elements, `.panel`, `.info`, `.empty`, `.error`, `.btn`, `.btn-danger` and the fuel badges) and a `.module.css` file for `Layout`, `CarCard`, `CarList`, `CarForm`, `CarsPage` and `CarDetailPage`. The fixed values (fuel types and their labels) are now in `constants.js`.
- Changed or rejected: I kept my red and graphite look and the colors only as variables, so the light and dark themes still work with the button and with the system setting. The `data-testid` attributes from stage 7 stay on the same elements, and the title in the card has `item-link` instead of `item-title`, as the guide says. The checkbox has an `aria-label`, because the title is now a link and the label around it was removed.

### 3. README and verification table
- Asked: update the README for stage 8 and prepare the verification table with the exact lines of code.
- Got: the "Stage 8: routing and detail page" section, the updated status list and a table with line ranges for `App.jsx`, `Layout.jsx`, `CarCard.jsx`, `CarDetailPage.jsx` and `NotFoundPage.jsx`.
- Changed or rejected: I will replace `<user>`, `<repo>` and `<commit>` with my own values after pushing, and publish the table in a separate commit.

## What I learned / what did not work
With React Router the browser loads one HTML page and the address decides which page React draws: `Link` and `NavLink` change only the address, so the state and the page are not reloaded, and `Outlet` shows the current page inside the common layout. `useParams` returns the id from the address as text, and the detail page asks the server for exactly that car; the effect depends on `[id]`, so it runs again when the id changes, and a missing car shows an error message with a way back and not an empty screen. The route `*` catches every address that does not match, which gives the 404 page. With CSS Modules the class names become unique at build time, so the styles of a component do not clash with others, and only variables and shared classes stay in `index.css`.