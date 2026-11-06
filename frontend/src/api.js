// All the HTTP requests are here; the components do not call fetch directly.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchCars() {
  const res = await fetch(`${API_URL}/cars`);
  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  return res.json();
}