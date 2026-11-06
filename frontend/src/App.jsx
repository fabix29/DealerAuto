import { useEffect, useState } from "react";
import CarList from "./components/CarList.jsx";
import { fetchCars } from "./api.js";

// Starting theme: the one of the operating system
function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);

  // Runs once, after the first render
  useEffect(() => {
    let ignore = false; // do not set state if the page was closed meanwhile

    async function load() {
      try {
        const data = await fetchCars();
        if (!ignore) setCars(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  // In stage 6 the changes stay local: they are lost on refresh (fixed in stage 7)
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
          {loading && <p className="info">Loading cars...</p>}
          {error && (
            <p className="error">
              Could not load the data: {error}. Is <code>npm run api</code>{" "}
              running?
            </p>
          )}
          {!loading && !error && (
            <CarList
              cars={cars}
              onToggleSold={handleToggleSold}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}