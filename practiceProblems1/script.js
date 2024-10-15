let box=document.querySelectorAll(".box");
// console.log(box); // will print the node list
let temp=1;
for(div of box){
    div.innerText=`new unique valu${temp}`;
    temp++;
}