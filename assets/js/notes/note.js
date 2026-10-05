/**
 * JavaScript is Dynamically typed meaning that a variable's type
 * can change through runtime. There are 3 ways to declare.
 * 
 */
 
/**
 * Variables
 * - const is reserved for constants. Generally, you can't reassign them to a different value
 *     * However, if const is assigned to an object and not a primitive, you can change the 
 *       value that the object is connected to.
 * 
 * - let is block-scoped meaning that only code within the block it's declared can access it
 *     * This includes sub-blocks.
 * 
 * - var is function-scoped meaning that it can be acessed throughout the whole function but 
 *   gets deleted when the functions ends.
 */

const PI = 3.14;
var pizza = "mushroom"

if (true) {
    let icecream = "mint";
    if (true) {
        console.log(icecream);
    }
}

/** 
 * Loops and Arrays
 * 
 * In general, the setup of arrays are basically the same as Java's
 * JavaScript has 2 more specialized loops for collections: map() and filter()
 * "break;" and "continue;" statements still exist.
 * while() and do-while() loops stille xist
 * See examples below to see how they work
 * 
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const flavors = ["Chocolate", "Strawberry", "Vanilla", "Rocky Road", "MINT CHOCOLATE CHIP", "Cotton Candy"]

for (const flavor of flavors) { //This is similar to Java's "for-each" loop
    console.log(flavor);
}

function toUpper(string) {
    return string.toUpperCase();
}

//The map loop takes each item in flavors and calls the toUpper function on each one. Then puts the result in bigFlavors
const bigFlavors = flavors.map(toUpper);

for (const flavor of bigFlavors) {
    console.log(flavor);
}

function hasHoco(string) {
    //JavaScript has the includes() method to detect if a certain substring is within a string
    return string.includes("hoco") || string.includes("HOCO");
}

//The filter takes each item in flavors and passes it into the hasHoco() function. If the result of the 
//function is true, it is added to chocoFlavors.
const chocoFlavors = flavors.filter(hasHoco);

for (const flavor of chocoFlavors) {
    console.log(flavor)
}

/**
 * Functions
 * 
 * There are various ways to declare a function in JS.
 * I've shown examples below
 * 
 * - There are generally 2 syntax ways to create a function.
 *     - Function Expressions
 *     - Function Declarations
 * 
 * Function Declarations are created by using the "function functionName(parameter) {} syntax"
 *     - These use the JavaScript hoisting mechanism where they are treated as being declared at
 *       the top of the block that its declared
 * 
 * Function Expressions using the const function_name = function or its analogues are treated as variables
 *     - As a side effect, they aren't able to be called before they are actually declared within text.
 *     
 */  

console.log(timesTen(10));

function timesTen(number) {
    return number * 10;
}

const timesFifteen = function(number) {
    return number * 15;
}

//This function uses a unique feature in JavaScript called Arrow Functions.
const timesTwenty = (number) => { //If you only have one line, you can make the arrow point toward the curly brackets.
    return number * 20
}

//blah is a shortened form of blahExtended.
//Both use Arrow Functions, but blah is a simplification.
let blah = (a, b) => a + b;

let blahExtended = function(a, b) {
    return a + b;
};


//This function is called an anonymous function cuz it doesn't have a name.
//It's typically used when a function expects to receive another function as a parameter.
(function() {
    console.log("Anonymous")
});