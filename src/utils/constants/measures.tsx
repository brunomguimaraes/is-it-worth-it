export interface Unit {
  name: string,
  abbrev: string,
  multiplier: number,
};

export const units: Unit[] = [
  {
    name: "unidade",
    abbrev: "und",
    multiplier: 1,
  },
  {
    name: "gramas",
    abbrev: "g",
    multiplier: 1,
  },
  {
    name: "kilogramas",
    abbrev: "kg",
    multiplier: 1000,
  },
  {
    name: "litros",
    abbrev: "l",
    multiplier: 1,
  },
  {
    name: "mililitros",
    abbrev: "ml",
    multiplier: 0.001,
  },
  {
    name: "metro",
    abbrev: "m",
    multiplier: 1,
  },
  {
    name: "centímetro",
    abbrev: "cm",
    multiplier: 0.01,
  },
];