import { useState } from "react";

const FUELS = [
  { value: "gas", label: "Gas" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
];
const TITLE_MAX = 100;

// Controlled form: the React state is the source of truth for the fields
export default function CarForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [fuel, setFuel] = useState("gas");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function validate() {
    const t = title.trim();
    if (t === "") return "The title is required.";
    if (t.length > TITLE_MAX) {
      return `The title can have at most ${TITLE_MAX} characters.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading

    const message = validate();
    if (message) {
      setError(message);
      return;
    }

    setError("");
    setSending(true);
    try {
      await onAdd({ title: title.trim(), fuel, sold: false });
      setTitle("");
      setFuel("gas");
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Car name
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Dacia Logan 2020"
          maxLength={TITLE_MAX}
          aria-invalid={Boolean(error)}
          data-testid="form-title"
        />
      </label>
      <label>
        Fuel
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          data-testid="form-fuel"
        >
          {FUELS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </label>
      {error && (
        <p className="error" data-testid="form-error">
          {error}
        </p>
      )}
      <button type="submit" disabled={sending} data-testid="form-submit">
        {sending ? "Saving..." : "Add"}
      </button>
    </form>
  );
}