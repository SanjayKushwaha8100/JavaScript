let userName=prompt("Enter you full name");
let userArray=[];
userArray=userName.split(" ");
let size=userArray[0].length+userArray[1].length;
console.log("this is your UserName:"+"@"+userArray[0]+userArray[1]+size);