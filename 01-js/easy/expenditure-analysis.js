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

let ans = [];

function calculateTotalSpentByCategory(transactions) {
  for (let t of transactions){
    const index = ans.findIndex((item) => item.category === t.category);
    if(index === -1){
      ans.push({category: t.category, totalSpent: t.price});
    }else{
      ans[index].totalSpent += t.price;
    }

  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
