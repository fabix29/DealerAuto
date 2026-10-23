import CarCard from "./CarCard.jsx";

export default function CarList({ cars }) {
  if (cars.length === 0) {
    return <p className="empty">There are no cars in stock.</p>;
  }

  return (
    <ul className="item-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}