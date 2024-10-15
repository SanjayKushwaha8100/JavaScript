let check=0;

let handler1= function(e) {
    console.log(e.clientX,e.clientY);
    if(check==0){
        check=1;
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.border = "2px solid black"; // Set border to 2px solid black
        console.log("Background to white");

    }else
    {
        check=0;
        this.style.backgroundColor = "black";
        this.style.color = "white";
        this.style.border = "2px solid black"; // Set border to 2px solid black
        console.log("Background to black");
    }

    }

let handler2=(e)=>{
    console.log("Do nothing");
}
document.querySelector(".box").addEventListener("mouseenter",handler1);
document.querySelector(".box").addEventListener("mouseenter",handler2);

// now removing the eventListener
// to remove you have to pass the same handler the method 
document.querySelector(".box").removeEventListener("mousenter",handler2);
console.log("ok");
