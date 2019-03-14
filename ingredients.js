var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("\n");
// Write a while loop that prints out the contents of ingredients:
var i=0; var l = ingredients.length;
while(i < l){
  console.log(ingredients[i]);
  i++;
}

console.log("\n");
// Write a for loop that prints out the contents of ingredients:
for(i = 0;i< l;i++)
  console.log(ingredients[i]);

console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(i=l-1;i>=0;i--)
  console.log(ingredients[i]);
