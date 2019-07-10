/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - default
* 2. Implicit binding - "this" keyword is doing inside of object
* 3. New binding - "this" keyword acts as object, create new object 
* 4. Explicit binding - change the default by using call or apply method for "this" keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName (name){
    console.log(this); 
}
sayName(); 

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: "Hello", 
    sayHello: function (name){
        console.log(`${this.greeting} my name is ${name} `); 
        console.log(this); 
    }
}; 
myObj.sayHello("Jenny"); 

// Principle 3

// code example for New Binding
function CordialPerson(greeter){
    this.greeting = "Hello"; 
    this.greeter = greeter; 
    this.speak = function(){
        console.log(this.greeting + this.greeter); 
        console.log(this); 
    }; 
}

const jerry = new CordialPerson("Jacob"); 
jerry.speak(); 

// Principle 4

// code example for Explicit Binding
function Person (name){
    this.name = name; 
    this.speak = function (){
        console.log(`My name is ${this.name}`); 
    }; 
}

const jacob = new Person("Jacob"); 
jacob.speak.apply({name: "Jenny"}); 