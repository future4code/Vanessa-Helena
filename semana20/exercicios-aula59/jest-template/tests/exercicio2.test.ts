import { validateCharacter } from "../src";

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for life equal zero", () => {
  const result = validateCharacter({
    name: "Peppa pig",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for strength zero", () => {
  const result = validateCharacter({
    name: "Peppa pig",
    life: 1500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for defense zero", () => {
  const result = validateCharacter({
    name: "Peppa pig",
    life: 1500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

test("Must return false for the negative force value", () => {
  const result = validateCharacter({
    name: "Peppa pig",
    life: 1500,
    strength: -300,
    defense: 300,
  });

  expect(result).toBe(false);
});

test("Checking valid values", () => {
  const result = validateCharacter({
    name: "Peppa pig",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});
