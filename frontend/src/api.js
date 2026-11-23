// All the HTTP requests are here; the components do not call fetch directly.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Common function: sends JSON and throws an error if the response is not 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    // The own API answers with { error: "..." }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Server error: ${res.status}`);
  }
  // 204 No Content has no body
  return res.status === 204 ? null : res.json();
}

export function fetchCars() {
  return request("/cars");
}

export function fetchCar(id) {
  return request(`/cars/${id}`);
}

export function createCar(car) {
  return request("/cars", { method: "POST", body: JSON.stringify(car) });
}

export function updateCar(id, changes) {
  return request(`/cars/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteCar(id) {
  return request(`/cars/${id}`, { method: "DELETE" });
}