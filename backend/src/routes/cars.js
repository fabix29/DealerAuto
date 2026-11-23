import { Router } from "express";
import { parseId, validateCar } from "../validation.js";

const router = Router();

// Stage 9: the data stays in memory and is lost on restart (stage 10 moves it to MariaDB)
let cars = [
  { id: 1, title: "Dacia Duster 2021", sold: false, fuel: "diesel", bodyType: "SUV" },
  { id: 2, title: "Volkswagen Golf 2019", sold: true, fuel: "gas", bodyType: "Hatchback" },
  { id: 3, title: "Tesla Model 3 2022", sold: false, fuel: "electric", bodyType: "Sedan" },
  { id: 4, title: "Skoda Octavia 2020", sold: false, fuel: "diesel", bodyType: "Sedan" },
  { id: 5, title: "Renault Clio 2018", sold: true, fuel: "gas", bodyType: "Hatchback" },
];
let nextId = 6;

// Validates :id and finds the car, or answers with 400 / 404
function findIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Invalid id" });
    return -1;
  }
  const index = cars.findIndex((c) => c.id === id);
  if (index === -1) {
    res.status(404).json({ error: "The car does not exist" });
  }
  return index;
}

// GET /cars
router.get("/", (req, res) => {
  res.json(cars);
});

// GET /cars/:id
router.get("/:id", (req, res) => {
  const index = findIndex(req, res);
  if (index === -1) return;
  res.json(cars[index]);
});

// POST /cars
router.post("/", (req, res) => {
  const { errors, data } = validateCar(req.body ?? {});
  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join("; ") });
  }
  const car = { id: nextId++, ...data };
  cars.push(car);
  res.status(201).json(car);
});

// PATCH /cars/:id (partial update)
router.patch("/:id", (req, res) => {
  const index = findIndex(req, res);
  if (index === -1) return;
  const { errors, data } = validateCar(req.body ?? {}, { partial: true });
  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join("; ") });
  }
  cars[index] = { ...cars[index], ...data };
  res.json(cars[index]);
});

// DELETE /cars/:id
router.delete("/:id", (req, res) => {
  const index = findIndex(req, res);
  if (index === -1) return;
  cars.splice(index, 1);
  res.status(204).end();
});

export default router;