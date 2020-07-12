import React, { useState, ChangeEvent, FormEvent } from 'react';
import { id } from '../../utils/id'

import './styles.scss'
import { position } from '../../utils/array';

interface Item {
  id: string;
  value: number;
  unit: string;
  weight: number;
};

function RuleOfThree() {
  const emptyItem = {
    id: "",
    value: 0,
    weight: 0,
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
    console.log("NEW ITEM:", newItem);
    console.log("items:", items);
    const itemWithId = {...newItem, id: id()}
    console.log("NEW ITEM WITH ID:", itemWithId);
    setItems(items.concat(itemWithId));
    setNewItem(emptyItem);
  };

  const deleteItem = (itemId: string) => {
    console.log(itemId)
    const remainingItems = items.filter(({ id }) => id !== itemId);
    console.log(remainingItems)
    setItems(remainingItems);
  };

  const handleSelectUnit = (event: ChangeEvent<HTMLSelectElement>) => {
    const unit = event.target.value;
    console.log("selected Unit", unit)
	};

  return (
    <div id="ruleOfThree">
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            {position(items, item)}: {item.value} / {item.weight + item.unit}
            <button onClick={() => deleteItem(item.id)}>
              del
              </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          value={newItem.value}
          id="itemValue"
          onChange={(handleInputChange)}
          />
        <input
          type="text"
          name="weight"
          value={newItem.weight}
          id="itemWeightValue"
          onChange={(handleInputChange)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default RuleOfThree;
