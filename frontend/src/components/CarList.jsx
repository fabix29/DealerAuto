import CarCard from "./CarCard.jsx";

// Receives the list and the functions and passes them to every card.
export default function CarList({ cars, onToggleSold, onDelete }) {
  if (cars.length === 0) {
    return <p className="empty">There are no cars in stock.</p>;
  }

  return (
    <ul className="item-list">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onToggleSold={onToggleSold}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}