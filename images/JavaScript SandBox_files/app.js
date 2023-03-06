console.log("hello MUM"); 
//Function Expression

function greet(){
    console.log("hello");
}
greet();

function show(name = "John", age=23){
    console.log("My name is " + name + " and I am " + age)
}
show();

const book = function(Algo){
    return Algo + "rithm";
}

console.log(book("Algo"))

// immediately Invoked functions IIFs

//Property Method

let MIU = {
    Dept: "CS",
    Class: "WAP",
    Professor: "Bruce",
    
    Mum: function(){
        return this.Class;
    }
}
console.log(MIU.Mum());

let arr = [{
    id : "k",
    id1: 2,
    id2: 5,
}]

for(let i in arr){
    console.log(`${i} : ${arr[i]}`);
}
const out = arr.map(function(i){
    console.log(i);
})

//Anonymous function

const square = function(num){
    return num *num;
}
console.log(square(4));

// Named Function Expression

const factorial = function fact (n){
    return n==1 ? 1 : n*fact(n-1);
}
console.log(factorial(4));

//local storage

localStorage.lastname="smith";

document.getElementById(lastname).innerHTML = localStorage.lastname;







