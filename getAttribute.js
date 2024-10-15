let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name")
console.log(name);


div.setAttribute("name","no name");
let changedName=div.getAttribute("name")
console.log(name);

// node.style
// changing the background coloring
div.style.background="green";