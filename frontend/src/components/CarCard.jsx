// A single car from the list, received through props.
const FUEL_LABELS = { gas: "Gas", diesel: "Diesel", electric: "Electric" };

export default function CarCard({ car, onToggleSold, onDelete }) {
  return (
    <li className={car.sold ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={car.sold}
          onChange={() => onToggleSold(car.id)}
        />
        <div>
          <h3>{car.title}</h3>
          <span className={`badge badge-${car.fuel}`}>
            {FUEL_LABELS[car.fuel]}
          </span>
        </div>
      </label>
      <div className="item-side">
        <span className="status">{car.sold ? "Sold" : "Available"}</span>
        <button
          className="btn-danger"
          onClick={() => onDelete(car.id)}
          aria-label={`Delete ${car.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}