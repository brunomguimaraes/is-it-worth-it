import React, { useState, useEffect } from 'react';

import './styles.scss'

interface Item {
  id: number;
  value: number;
	weight: Weight;
};

interface Weight {
	unit: string;
	value: number;
};

function RuleOfThree() {

  // const emptyItem = {
  //   title: "",
  //   description: ""
  // };

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const mockItem = {
      id: 1,
      value: 10.00,
      weight: {
        unit: "g",
        value: 100
      }
    };
    setItems([mockItem]);
  }, []);
  // const [newTodo, setNewTodo] = useState(emptyItem);
  // // const [editing, setEditing] = useState(false);

  // const createOnNewTodoChange = (field) => {
  //   return (e) => {
  //     setNewTodo({
  //       ...newTodo,
  //       [field]: e.target.value
  //     });
  //   };
  // };

  // const deleteTodo = (todoIndex) => {
  //   deleteEntry(todoIndex);
  //   const remainingTodos = todos.filter(({ id }) => id !== todoIndex);
  //   setTodos(remainingTodos);
  // };

  return (
    <div id="ruleOfThree">
        <ul>
          {items && items.map((item) => (
            <li key={item.id}>
              {item.value} / {item.weight.value + item.weight.unit}
              {/* <button onClick={() => console.log(item)}>
                edit
              </button>
              <button onClick={() => deleteitem(item.id)}>
                del
              </button> */}
            </li>
          ))}
        </ul>
        {/* <div>
          <input
            value={newitem.title}
            onChange={createOnNewitemChange("title")}
          />
          <input
            value={newitem.description}
            onChange={createOnNewitemChange("description")}
          />
          <button onClick={() => createitem(newitem)}>add</button>
        </div> */}
      </div>
  );
}

export default RuleOfThree;
