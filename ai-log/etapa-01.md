# Stage 1: AI log

## Tools
- Claude (claude.ai chat)

## Conversations
- <share link> (theme choice, HTML/CSS mockup, README)

## Key requests

### 1. First version of the mockup
- Asked: build the stage 1 mockup from the assignment text: a header, an add form and three cards, responsive layout, visible focus and a dark theme, using only HTML and CSS.
- Got: a first page and README for an example theme (a personal book shelf), with a form, three cards and a dark theme set as the default.
- Changed or rejected: I rejected the book theme and chose my own: a car dealership app. The page was rebuilt for that theme, with cars, fuel types and a sold/available status.

### 2. Aligning the project with the stage guide
- Asked: adapt the project to the structure and requirements in the stage 1 guide (PDF).
- Got: a page rebuilt with the guide's structure (app-header, container, panel, item-card), a two-column Grid collapsing to one column under 700px, :focus-visible, and a dark theme made only by redefining CSS variables in @media (prefers-color-scheme: dark).
- Changed or rejected: the first dealership version had three states (available, reserved, sold). The guide requires a yes/no state that can be ticked later, so I reduced it to available/sold. I also kept a graphite header with an accent stripe instead of an accent-colored header, because it fits the dealership theme better.

### 3. Naming, styling and language
- Asked: rename the app to DealerAuto, make the CSS closer to the car dealership theme, and write the page in English, consistent with my README.
- Got: a red and graphite palette, a dashed "road" line in the header, a green dot for available cars, a different color for each fuel tag (Gas, Diesel, Electric), and the page text translated to English.
- Changed or rejected: I wrote the final README myself and the page follows it (fuel values Gas, Diesel, Electric; the data model fields). I checked the page against the README and the checklist in the guide.

## What I learned / what did not work
The first draft did not match the guide: it used three statuses instead of one yes/no flag, so I had to compare the result with the requirements and not trust it blindly. I learned that Grid splits the page into two columns, while Flexbox lines up the form fields and the parts of each card. The dark theme works because every color is a CSS variable, so only the variable values change inside prefers-color-scheme: dark. I also learned that :focus-visible shows an outline only when navigating with the Tab key.
