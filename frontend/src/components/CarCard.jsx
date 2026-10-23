// A single car from the list, received through props
const FUEL_LABELS = { gas: "Gas", diesel: "Diesel", electric: "Electric" };

export default function CarCard({ car }) {
  return (
    <li className={car.sold ? "item-card done" : "item-card"}>
      <div>
        <h3>{car.title}</h3>
        <span className={`badge badge-${car.fuel}`}>
          {FUEL_LABELS[car.fuel]}
        </span>
      </div>
      <span className="status">{car.sold ? "Sold" : "Available"}</span>
    </li>
  );
}