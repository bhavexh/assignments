/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let categories = {}

function calculateTotalSpentByCategory(transactions) {
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if(categories[category]) {
      console.log(categories[category]);
      categories[category] += price;
    }
    else {
      categories[category] = price;
    }
  });
  console.log(categories);

  const ans = Object.keys(categories).map((category) => ({
    category,
    totalSpent : categories[category],
  }));

  return ans;
}

module.exports = calculateTotalSpentByCategory;
