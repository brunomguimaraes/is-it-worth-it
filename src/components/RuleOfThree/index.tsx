import React, { useState, ChangeEvent, FormEvent } from 'react';
import BestItem from '../BestItem';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as XIcon } from '../../assets/x.svg'
import { id } from '../../utils/id'
import { position } from '../../utils/array';
import { calculatePricePerUnit } from '../../utils/calculators';

import './styles.scss'

export interface Item {
  id: string;
  price: number;
  unit: string;
  weight: number;
  ratio: number;
};

function RuleOfThree() {
  const emptyItem = {
    id: "",
    price: 0,
    weight: 0,
    ratio: 0,
    unit: "g"
  };

  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>(emptyItem);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newItem === emptyItem) return;
    const itemWithIdAndRatio = { ...newItem, id: id(), ratio: calculatePricePerUnit(newItem) }
    setItems(items.concat(itemWithIdAndRatio));
    setNewItem(emptyItem);
  };

  const deleteItem = (itemId: string) => {
    const remainingItems = items.filter(({ id }) => id !== itemId);
    setItems(remainingItems);
  };

  // const handleSelectUnit = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const unit = event.target.value;
  //   console.log("selected Unit", unit)
  // };

  return (
    <div id="ruleOfThree">
      {items &&
        <BestItem items={items} />
      }
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            {position(items, item)}: R$ {item.price} / {item.weight + item.unit}
            <button onClick={() => deleteItem(item.id)}>
              <XIcon className="xIcon" />
            </button>
          </li>
        ))}
      </ul>
      <form className={"itemsForm"} onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="price">Preço</label>
          <input
            type="text"
            name="price"
            value={newItem.price}
            id="itemValue"
            onChange={(handleInputChange)}
          />
        </div>
        <div className="field">
          <label htmlFor="weight">Quantidade</label>
          <input
            type="text"
            name="weight"
            value={newItem.weight}
            id="itemWeightValue"
            onChange={(handleInputChange)}
          />
        </div>
        <button type="submit">
          <PlusIcon className="plusIcon"/>
        </button>
      </form>
    </div>
  );
}

export default RuleOfThree;
