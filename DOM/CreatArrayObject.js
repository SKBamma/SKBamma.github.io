//Method 1
var fruits = ['Apple', 'Banana'];
console.log(fruits) // [ 'Apple', 'Banana' ]

//Method 2
var msgArray = [];
msgArray[0] = 'Hello';
console.log(msgArray) //  [ 'Hello' ]

//Method 3 
var array = new Array('Hello');
console.log(array) // [ 'Hello' ]

//Method 4 
var another = Array.of(1, 2, 3);
console.log(another) // [ 1, 2, 3 ]

//Method 5 

var b = arrayMaker({7: 1}, {2: 3});

function arrayMaker(n) {
  console.log(n);
  if (n !== typeof Array) {
    return Array.prototype.slice.call(arguments);
  }
}
 
console.log(b) //  [ { '7': 1 }, { '2': 3 } ]
