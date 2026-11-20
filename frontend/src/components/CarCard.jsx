import { Link } from "react-router-dom";
import { FUEL_LABELS } from "../constants.js";
import styles from "./CarCard.module.css";

// A single car from the list, received through props.
export default function CarCard({ car, onToggleSold, onDelete }) {
  return (
    <li
      className={car.sold ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={car.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={car.sold}
          onChange={() => onToggleSold(car.id)}
          aria-label={`Mark ${car.title} as sold`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/cars/${car.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {car.title}
          </Link>
          <span className={`badge badge-${car.fuel}`}>
            {FUEL_LABELS[car.fuel]}
          </span>
        </div>
      </div>
      <div className={styles.side}>
        <span className={styles.status}>{car.sold ? "Sold" : "Available"}</span>
        <button
          className="btn-danger"
          onClick={() => onDelete(car.id)}
          aria-label={`Delete ${car.title}`}
          data-testid="item-delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}