/*function greet(){
    console.log("Hello there");
}

greet()
greet()
greet() */


/*const speak = function(name ="luigi", time="night"){
    console.log(`good ${time} ${name}`);
};


speak("Mario", "morning"); */ 

/*const calcArea = function(radius){
    return 3.14 * radius**2;
};  */


//arrow function 

//You can take away the brackets if its just a single 
//return like this. 
// const calcArea = (radius) =>3.14 * radius**2;

/* const calcArea = (radius) =>{
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);
 */


/*const greet = () => "hello world";
const result = greet(); 
console.log(result)
*/ 
/*
const name ="shaun"; 

//function
const greet = () => "hello";

let resultOne = greet();

console.log(resultOne)

//methods 
let resultTwo = name.toUpperCase();

console.log(resultTwo) */
/* callback 
const myFunc = (callBackFunc) => {
    let value = 50; 
    callBackFunc(value)
};

myFunc(value =>{
    console.log(value);
}); */ 

/*let people = ["Mini", "Bella","Doris", "Eddie"];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach (logPerson); */ 

const ul = document.querySelector(".people");

const people = ["Mini", "Bella","Doris", "Eddie"];

let html = ``;

people.forEach(function(person){
    //Create html template 
    html += `<li style="color: purple>${person}</li>`;
});

console.log(html);

ul.innerHTML = html