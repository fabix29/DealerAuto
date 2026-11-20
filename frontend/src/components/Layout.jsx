import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

// NavLink marks the current page by itself
function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

// Starting theme: the one of the operating system
function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Layout() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Theme switch: state for the button, data-theme attribute for the CSS
  function handleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div>
            <h1 className={styles.logo}>DealerAuto</h1>
            <p className={styles.tagline}>
              Keep track of your dealership's car stock.
            </p>
          </div>
          <div className={styles.right}>
            <nav className={styles.nav} data-testid="nav">
              <NavLink to="/" end className={navClass}>
                Cars
              </NavLink>
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
            </nav>
            <button
              className={styles.themeToggle}
              onClick={handleTheme}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Web Technologies project</footer>
    </>
  );
}