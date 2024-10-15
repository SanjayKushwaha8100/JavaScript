// creating ele. Here we are creating button
let newButton=document.createElement("button");
newButton.innerText=" Click Me !";
console.log(newButton);

// inserting in div
let div=document.querySelector("div");
div.append(newButton);