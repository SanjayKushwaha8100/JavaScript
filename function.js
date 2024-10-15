function print(){
    console.log("no return from this function");
}
function sum(a,b){
    return a+b;
}
// arrow function(latest)
let arrowSum=(a,b)=>{
    console.log("Printing sum using arrow function");
    return a+b;
}
const multiply=(a,b)=>{
    return a**b;
}


print();
let ans=sum(3,3);
console.log(ans);

// calling arrow fuction
console.log(arrowSum(3,4),multiply(3,4));