let arr=[43,55,89,90,98,93,99];
let topperArray=arr.filter((val)=>{return val>90});
console.log(topperArray);



// next question

let input=prompt("Enter a number");
let arrary=[];
for(let i=1;i<=input;i++){
    arrary.push(i);
}

let totalSum=arrary.reduce((sum,val)=>sum+val);
console.log("Total sum of array is:",totalSum);

let product = arrary.reduce((prod,val)=>prod*val);
console.log("Product is :",product)