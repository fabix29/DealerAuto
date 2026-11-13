import { useEffect, useState } from "react";
import CarList from "./components/CarList.jsx";
import CarForm from "./components/CarForm.jsx";
import { createCar, deleteCar, fetchCars, updateCar } from "./api.js";

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
        if (!ignore) {
          setError(
            `Could not load the data: ${err.message}. Is npm run api running?`
          );
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  // First the server, then the state: only what was saved reaches the screen
  async function handleAdd(car) {
    const created = await createCar(car); // the server returns the car with its id
    setCars((prev) => [...prev, created]);
  }

  async function handleToggleSold(id) {
    const car = cars.find((c) => c.id === id);
    setError(null);
    try {
      const updated = await updateCar(id, { sold: !car.sold });
      setCars((prev) => prev.map((c) => (c.id === id ? updated : c)));
    } catch (err) {
      setError(`Could not update the car: ${err.message}`);
    }
  }

  async function handleDelete(id) {
    setError(null);
    try {
      await deleteCar(id);
      setCars((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(`Could not delete the car: ${err.message}`);
    }
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
          <h2>Add car</h2>
          <CarForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Cars in stock</h2>
          {loading && (
            <p className="info" data-testid="loading">
              Loading cars...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          {!loading && (
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