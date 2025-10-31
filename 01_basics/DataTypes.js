//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

let x = 10;     // number
x = "Hello";    // now it's a string
x = true;       // now it's a boolean
//this is why Java script is called as a dynamically typed script

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//symbol
console.log(typeof heros);//object
console.log(typeof myFunction);//object function, basically a function


// https://262.ecma-international.org/5.1/#sec-11.4.3


//---------------------**************--------------------
// Memory
// Stack(Primitive) & Heap(Non_Primitive)

let nameone="Sai Charan"
let nametwo=nameone;
nametwo="Charan";

console.log(nameone);
console.log(nametwo);
//The output is different as the nameone is to copied to nametwo

let userone={
    email: "user@gmail.com",
}
let usertwo=userone;

usertwo.email="charan@gmail.com";

console.log(userone);
console.log(usertwo);
//The output is same as the userone and usertwo refer to the same memory in the heap.




