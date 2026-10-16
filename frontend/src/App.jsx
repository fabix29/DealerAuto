const cars = [
  { id: 1, title: "Dacia Duster 2021", sold: false, fuel: "diesel" },
  { id: 2, title: "Volkswagen Golf 2019", sold: true, fuel: "gas" },
  { id: 3, title: "Tesla Model 3 2022", sold: false, fuel: "electric" },
];

export default function App() {
  const available = cars.filter((c) => !c.sold).length;

  return (
    <>
      <header className="app-header">
        <h1>DealerAuto</h1>
        <p>Keep track of your dealership's car stock.</p>
        <p className="app-count">
          {cars.length} cars, {available} of them available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Cars in stock</h2>
          {/* Temporary: raw data; components come in Stage 4 */}
          <pre>{JSON.stringify(cars, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}