/*function sumMaxMin(arr) {
    var max = Math.max(...arr) ;
    var min = Math.min(...arr) ;
    var sum = max + min

    return { max: max, min: min, sum: sum } ;
}

var arr = [3,5,6,8,11] ;
var result = sumMaxMin(arr) ;

console.log("Max:", result.max);
console.log("Min:", result.min);
console.log("sum:", result.sum);
*/



/*function getFullNames(firstNames, lastNames) {
    var fullNames = [];
  
    firstNames.forEach(function (firstName, index) {
      var fullName = (index + 1) + ". " + firstName + " " + lastNames[index];
      fullNames.push(fullName);
    });
  
    return fullNames;
  }
  
  var first = ["Bob", "Jill"];
  var last = ["Gregory", "Wurtz"];
  var full = getFullNames(first, last);
  
  console.log(full);
*/



/*for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + "\n");
    } else {
      console.log(i + " ");
    }
  }
*/


function multiplyDigits(number) {
    var digits = number.toString().split("");
    var product = 1;
  
    digits.forEach(function (digit) {
      product *= Number(digit);
    });
  
    return product;
  }
  
  var number = 12345;
  var result = multiplyDigits(number);
  
  console.log("Result:", result);
  






  
  


  

