import { units } from './constants/measures'

const unitMultiplier = (unit: string) => {
  const selectedUnit = units.filter(u => u.abbrev === unit)
  return selectedUnit[0].multiplier
};

export const calculatePricePerUnit = (item: any) => {
  const unitValue = item.weight * unitMultiplier(item.unit);
  return (item.price / unitValue)
}