// 1. Declare a variable, assign different types of values to it (boolean, number, string) 
//    and print the value and type of the variable each time.
// 2. Write a JavaScript program that will calculate the price of 30 Phones,
//    where the price of one phone is $119.95 and the tax rate is 5%.
// 3. Write a JavaScript program that will calculate area of Circle. (area = π * r2)


//Exercise 1
// let isNum = true;

// let num = 13;

// let word = 'Steve';

// console.log (typeof isNum);
// console.log (typeof num);
// console.log (typeof word);

// //Exercise 2

// const numberOfPhones = 30;
// const pricePerPhone = 119.95;
// const taxRate = 5/100;

// const subtotal = numberOfPhones * pricePerPhone;
// const taxAmount = subtotal * taxRate;
// const totalPrice = subtotal + taxAmount;

// console.log("Subtotal: $" + subtotal);
// console.log("Tax: $" + taxAmount);
// console.log("Total Price: $" + totalPrice);

//Exercise 3

var radiusC = 5*5; // Enter the radius of the circle here
var Pi = 3.14;
var circle = Pi * radiusC;
console.log("The area of the circle is: " + circle);


var radius = 5;
var area = Math.PI * Math.pow(radius, 2);
console.log("The area of the circle is: " + area);
