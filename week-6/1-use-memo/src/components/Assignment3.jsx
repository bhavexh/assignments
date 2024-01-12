import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);
  const [itemName, setItemName] = useState("");
    const [itemValue, setItemValue] = useState("");

    const addHandler = () => {
        setItems([...items, {name: itemName, value: itemValue}])
        setItemName("");
        setItemValue(0);
    }

  // Your code starts here
  let totalValue = 0;
  totalValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum = sum + items[i].value;
    }
    return sum;
  }, [items]);
  // Your code ends here
  return (
    <div>
      <div>
        <h4>Item Name</h4>
        <input type="text" value={itemName} onChange={(e)=>{setItemName(e.target.value)}}/>
        <h4>Price</h4>
        <input type="number" value={itemValue} onChange={(e)=>{setItemValue(Number(e.target.value))}}/>
        <button onClick={addHandler}>add item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
