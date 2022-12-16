// // 1- Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

// //First solution for non-Arrow functions:
function add() {

    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

/*
"arguments" in JS is a local Array-like object, available in all non-narrow functions and contains the arguments passed to that function. 
 */
console.log(add(2,4,6)); //12
console.log(add(2,4,6,8,10)); //30
console.log(add(2,4,6,8,10,12,14,16)); //72

// //Second solution for arrow functions(Using spread operator to pass an indefinite number of parameters to the specified function):
function add(...args) {
    return args.reduce((total, current) => total + current);
  }
  console.log(add(3, 4, 8)); //15
  console.log(add(3, 4, 8, 10, 20)); //45
  console.log(add(3, 4, 4, 9)); //20

// 2- Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
    // addOnlyNums(1, 'cat', 3, 4); //8

    
// 3- Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in JS
// countTheArgs('cat', 'dog'); //2
// countTheArgs('cat', 'dog', 'frog', 'bear'); //4

/*
The arguments. length property contains the number of arguments passed to the function:
*/

function countTheArgs() {
	console.log(arguments.length);
}

countTheArgs(10); //1
countTheArgs(); //0
countTheArgs(10,20,30,40,50); //5
countTheArgs('cat', 'dog'); //2
countTheArgs('cat', 'dog', 'frog', 'bear'); //4


// 4- Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).


function combineTwoArrays(array1, array2) {
    let newArray = [];

        newArray.push(...array1, ...array2);

    return newArray;
}

console.log(combineTwoArrays([1,2,3], [4,5,6]));


// 5- Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
// sumEveryOther(5, 6, 3, 4, 1); //9
// sumEveryOther(10, 2, 11); //21
function sumEveryOther() {

    var sum = 0;
    for(var i = 0; i < arguments.length; i+=2) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumEveryOther(5, 6, 3, 4, 1));
console.log(sumEveryOther(10, 2, 11));


// 6- Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
// onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']
// onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]

/*
ES6 has a native object called "Set" to store unique values. To get an array with unique values:
*/

function onlyUniques(...args){
    let unique = [...new Set(args)];
    return unique;
}

  
console.log(onlyUniques('cat', 'cat', 'dog', 'pig')); //['cat', 'dog', 'pig']
console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4)); //[1, 4, 7, 2]

// 7- Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
function combineAllArrays(...arrays) {
    let newArray = [];

    arrays.forEach(array => {
        newArray = [...newArray, ...array]
    });

    return newArray;
}

console.log(combineAllArrays([1,2,3], [4,5,6], [7,8,9]));

// 8- Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.
// sumAndSquare(2, 4, 3); //29
// sumAndSquare(1, 2); //5

function squareAndSum() {
    var sqr =0;
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sqr = arguments[i] * arguments[i];
        sum += sqr;
    }
    return sum;
  }
  console.log(squareAndSum(2, 4, 3)); //29
  console.log(squareAndSum(1, 2)); //5