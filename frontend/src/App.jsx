import { useState } from "react";
import CarList from "./components/CarList.jsx";

// The data of the theme, same as in the README (only the starting value)
const INITIAL_CARS = [
  { id: 1, title: "Dacia Duster 2021", sold: false, fuel: "diesel" },
  { id: 2, title: "Volkswagen Golf 2019", sold: true, fuel: "gas" },
  { id: 3, title: "Tesla Model 3 2022", sold: false, fuel: "electric" },
];

// Starting theme: the one of the operating system
function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [cars, setCars] = useState(INITIAL_CARS);
  const [theme, setTheme] = useState(getInitialTheme);

  // Immutable update: new list, new object for the changed car
  function handleToggleSold(id) {
    setCars((prev) =>
      prev.map((c) => (c.id === id ? { ...c, sold: !c.sold } : c))
    );
  }

  function handleDelete(id) {
    setCars((prev) => prev.filter((c) => c.id !== id));
  }

  // Theme switch: state for the button, data-theme attribute for the CSS
  function handleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  // Derived value: recalculated on every render
  const available = cars.filter((c) => !c.sold).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTheme}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <h1>DealerAuto</h1>
        <p>Keep track of your dealership's car stock.</p>
        <p className="app-count">
          {cars.length} cars, {available} of them available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Cars in stock</h2>
          <CarList
            cars={cars}
            onToggleSold={handleToggleSold}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}