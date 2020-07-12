import { units } from './constants/measures'
import { Item } from '../components/RuleOfThree';

const unitMultiplier = (unit: string) => {
  const selectedUnit = units.filter(u => u.abbrev === unit)
  return selectedUnit[0].multiplier
};

export const calculatePricePerUnit = (item: Item) => {
  const unitValue = item.weight * unitMultiplier(item.unit);
  return (item.price / unitValue);
}