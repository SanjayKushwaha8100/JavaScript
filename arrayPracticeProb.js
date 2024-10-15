let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// removing the first company 
companies.shift();
console.log(companies);

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// removing "Uber" and adding "OLA"
companies.splice(2,1,"OLA")


// adding "Amazon" at the end

companies.push("Amazon");