function myFunction(string){
    let ans=0;
    for(const i of string){
        console.log(i);
        if(i==="a" ||i==="e" ||i==="i" ||i==="o" ||i==="u" ){
            ans++;
        }
    }
    return ans;
}

console.log(myFunction("SanjayKushwaha"))


let arrFunction=(str)=>{
    let ans=0;
    for(const i of str){
        if(i==="a" ||i==="e" ||i==="i" ||i==="o" ||i==="u" ){
            ans++;
        }
    }
    return ans;
}

console.log(arrFunction("SanjayKushwaha"))

// for each 

const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});


