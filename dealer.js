// ----- Data -----
const FUELS = ["gas", "diesel", "electric"];
const MAX_TITLE_LENGTH = 100;

const cars = [
  { id: 1, title: "Dacia Duster 2021", sold: false, fuel: "diesel" },
  { id: 2, title: "Volkswagen Golf 2019", sold: true, fuel: "gas" },
  { id: 3, title: "Tesla Model 3 2022", sold: false, fuel: "electric" },
];

// ----- Reading -----
function listTitles(list) {
  return list.map((c) => c.title);
}

function countAvailable(list) {
  return list.filter((c) => !c.sold).length;
}

function searchByTitle(list, text) {
  const query = text.toLowerCase();
  return list.filter((c) => c.title.toLowerCase().includes(query));
}

// ----- Adding (with validation) -----
function nextId(list) {
  return list.reduce((max, c) => Math.max(max, c.id), 0) + 1;
}

function addCar(list, title, fuel = "gas") {
  const cleanTitle = title.trim();
  if (cleanTitle === "") {
    console.log("The title cannot be empty.");
    return list;
  }
  if (cleanTitle.length > MAX_TITLE_LENGTH) {
    console.log("The title is too long (maximum " + MAX_TITLE_LENGTH + " characters).");
    return list;
  }
  if (!FUELS.includes(fuel)) {
    console.log("Invalid fuel: " + fuel);
    return list;
  }
  const newCar = { id: nextId(list), title: cleanTitle, sold: false, fuel };
  return [...list, newCar];
}

// ----- Changing and deleting -----
function toggleSold(list, id) {
  return list.map((c) => (c.id === id ? { ...c, sold: !c.sold } : c));
}

function deleteCar(list, id) {
  return list.filter((c) => c.id !== id);
}

// ----- Console tests -----
console.log("--- Reading ---");
console.log("Titles:", listTitles(cars).join(", "));
console.log("Available:", countAvailable(cars));
console.log("Search 'MODEL':", listTitles(searchByTitle(cars, "MODEL")).join(", "));

console.log("--- Adding ---");
let list = addCar(cars, "Skoda Octavia 2020", "diesel");
console.log("New list:", list.length, "cars");
console.log("The original still has:", cars.length, "cars");

console.log("--- Changing and deleting ---");
list = toggleSold(list, 1);
console.log("After marking id 1 as sold, available:", countAvailable(list));
list = deleteCar(list, 3);
console.log("After deleting id 3:", listTitles(list).join(", "));

console.log("--- Validation ---");
addCar(list, "   ");
addCar(list, "Test car", "hybrid");

