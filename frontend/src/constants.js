// The fixed values and their labels, in one place.
export const FUELS = [
  { value: "gas", label: "Gas" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
];

export const FUEL_LABELS = Object.fromEntries(
  FUELS.map((f) => [f.value, f.label])
);