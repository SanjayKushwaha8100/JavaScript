

// creating  a new ele as button

let newButton=document.createElement("button");
newButton.innerText="Click me";
newButton.style.background="red";
newButton.style.color="white";

// inserting
document.querySelector("body").prepend(newButton);