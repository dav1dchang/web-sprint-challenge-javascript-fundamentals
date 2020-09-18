// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: It's due to function scope. Function scope is a one-way street which allows us to reach outside the function to access variables outside the function scope; however, at the same time, you cannot be outside a function and reach inside to access a variable.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

//method 1
function summation(param){
  let total = 0;
  for (let i = 1; i <= param; i++) {
    total += i;
  }//for
  return total;
}//sumation

//method2
function summation2(param){
  return total = (param * (param + 1))/2;
}

console.log(summation(4));//method1
console.log(summation2(4));//method2