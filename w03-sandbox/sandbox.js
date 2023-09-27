const firstName = "Heitor";
const lastName = "Cazado";

function fullName (first, last){
    return `${first} ${last}`;
}

const fName = function (first, last){
    return `${first} ${last}`;
}

const arrowName = (first, last) => `${first} ${last}`;

console.log("Function declaration: " + fullName(firstName, lastName));

console.log("Function expression: " + fName(firstName, lastName));

console.log("Arrow Function: " + fName(firstName, lastName));

//Array functions
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0).toUpperCase() === "B");

let namesLength = names.map( name => name.length);

let namesAverageLength = names.reduce((total, name)=> total+ name.length / names.length,0);

console.log(namesAverageLength);

//selecting the fullname ID into document and replacing with with declared function return

document.querySelector("#fullname").innerHTML = fullName(firstName, lastName);