//  Unlike the slice() method, the splice() method will change the contents of the original array.
//  The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

// If nothing was removed from the array, then the return value will just be an empty array.

// Here is the basic syntax.

// splice(start, optional delete count, optional items to add)

const food = ['pizza', 'cake', 'salad', 'cookie'];

// 1-If we wanted to add another food item to the array at index 1, then we can use the following code:

// he first number is the starting index, and the second number is the delete count.
// Since we are not deleting any items, our delete count is zero.
food.splice(1, 0, 'burrito');
console.log(food);
// ["pizza", "burrito", "cake", "salad", "cookie"]

// If we console.log(food.splice(1,0,"burrito")),
// then we would get back an empty array because nothing was removed from our array.

// 2-In this next example, we want to remove "salad" from the array. We can use the start and delete parameters to accomplish this.

// The number 2 is the start position and the number 1 represents the delete count.
// Since salad is at index 2 then it will be removed from the array.

const food2 = ['pizza', 'cake', 'salad', 'cookie'];
food2.splice(2, 1);
console.log(food2);
// ['pizza', 'cake', 'cookie'];

const food3 = ['pizza', 'cake', 'salad', 'cookie'];
food3.splice(2, 2);
console.log(food3);
// ['pizza', 'cake'];
