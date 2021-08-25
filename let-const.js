// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।


// 1. uses of let and const
// const balance = 550;
// balance = 330;

const firstName = 'sumaia';
const fullName = 'my name is' + ' ' + firstName;
// console.log(fullName);

const numbers = [44, 23, 67, 43, 78,];
numbers.push(99);
numbers[2] = 85;
// console.log(numbers);
// but reassigned is not allowed
// numbers = [21, 23, 35, 83];
// const in a function
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
    // console.log(sum);

}
// you can change one portion when you use const in a object
const products = { name: 'laptop', company: 'dell', price: 50000, color: 'black' };
products.name = 'macbook';
console.log(products);
products = { name: 'macbook' }; //it is not allowed

