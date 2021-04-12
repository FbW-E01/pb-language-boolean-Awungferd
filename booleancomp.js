// 1. WHAT TYPE?
console.log("1a) ", 3 == "3");
console.log("1b) ", 3 === "3");
// The first operation returns true while the second returns false.
// There is a difference in the logic. The first declaration is a loose comparison which converts the string - "3" - into a Boolean and equates them
// In the second operation which is a strict comparison the variables are not converted since the triple equal (===) sign makes sure there is strict compliance.
//2 Not
let virtue = true;
let confirmation = "false";
console.log("2 ", confirmation == virtue);

//3. Short Circuit

let firstName, givenName;

firstName = "Stacey";
let name = givenName || firstName || "John";

console.log("3) ", name); // this will print Stacey. JS is selecting the variable that had been given a value. givenName has no value assigned
