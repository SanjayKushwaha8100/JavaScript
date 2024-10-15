let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log(`Avg marks is ${sum/marks.length}`);

let foodItems=["potato","Mango","Banana"];
foodItems.push("carrot","nono");
foodItems.push(true,34.3);
let deletedItems=foodItems.pop();
console.log(foodItems,deletedItems);
let newArray=foodItems.toString();
console.log(newArray);

// splice
let a=[2,4,6,10,12];
a.splice(3,0,8);console.log(a);
a.splice(4,1);console.log(a);
a.splice(2,1,101);
console.log(a);
a.splice(2);
console.log(a);
a.splice();
console.log(a);
