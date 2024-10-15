// write a code which can give grades to students according to their scores
// 90-100,A
// 70-89,B 
// 60-69,C 
// 50-59,D 
// 0-49,F

let score=prompt("Enter your score");
if(score>=90 && score<=100){
    console.log("Your grade is A")
}
else if(score>=70 && score<=89){
    console.log("Your grade is B");
}
else if(score>=60 && score<=69){
    console.log("Your grade is C");
}
else if(score>=50 && score<=59){
    console.log("Your grade is D");
}
else{
    console.log("Your grade is F");
}