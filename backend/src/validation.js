// Server side validation: the data from the client is never trusted.
// The fixed values must be the same as in frontend/src/constants.js.
export const FUELS = ["gas", "diesel", "electric"];
export const BODY_TYPES = ["SUV", "Sedan", "Hatchback"];
const TITLE_MAX = 100;

// partial = true for PATCH (only the fields that were sent are checked)
export function validateCar(body, { partial = false } = {}) {
  const errors = [];
  const data = {};

  if (!partial || body.title !== undefined) {
    if (typeof body.title !== "string" || body.title.trim() === "") {
      errors.push("title is required");
    } else if (body.title.trim().length > TITLE_MAX) {
      errors.push(`title can have at most ${TITLE_MAX} characters`);
    } else {
      data.title = body.title.trim();
    }
  }

  if (!partial || body.fuel !== undefined) {
    const f = body.fuel ?? "gas";
    if (!FUELS.includes(f)) {
      errors.push(`fuel must be one of: ${FUELS.join(", ")}`);
    } else {
      data.fuel = f;
    }
  }

  if (body.sold !== undefined) {
    if (typeof body.sold !== "boolean") {
      errors.push("sold must be true or false");
    } else {
      data.sold = body.sold;
    }
  } else if (!partial) {
    data.sold = false;
  }

  // Optional field of the data model
  if (body.bodyType !== undefined) {
    if (!BODY_TYPES.includes(body.bodyType)) {
      errors.push(`bodyType must be one of: ${BODY_TYPES.join(", ")}`);
    } else {
      data.bodyType = body.bodyType;
    }
  }

  return { errors, data };
}

// The ids from the address are text; only positive whole numbers are accepted
export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}