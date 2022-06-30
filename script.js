// console.log("MY name is Abdullahi");
// console.log("I am leaning javascript. JavaScript is a progrmming language ");
// console.log("I need to laern the following concepts of JavaScript ");
// console.log("DOM (Document object model)");
// console.log("data types in JS");
// console.log("Objects");
// console.log("Arrays");
// console.log("conditional statements");
// console.log("loops");

//myHeading is variable name; you can name it anything, whatever you like
//There are no
// characters, letters, underscore(_) are allowed in variable names
//varaibel names are case sensitive
//builtin functions

// document is available by default
// document is an object
//built in
console.log(document);

const myHeading = document.getElementById("heading");

const baaatton = document.getElementById("btn");

//Here we are adding an event called mouseenter to our button element
myHeading.addEventListener(
  "mouseenter",
  //following function runs when user Hover over tthe button
  function () {
    myHeading.style.color = "red";
    myHeading.innerHTML = "I have learnt click event in Js";
  }
);

// Here we are again adding an event called mouseleave to the button element
myHeading.addEventListener("mouseleave", function () {
  myHeading.style.color = "black";
  myHeading.innerHTML = "JavaScript basics";
});
