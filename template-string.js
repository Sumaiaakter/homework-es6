// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const firstName = 'mumtahina';
const middleName = 'karim';
const lastName = 'jui';
const fullName = `<h1>my friend name is: ${firstName} ${middleName} ${lastName}</h1>`;
// console.log(fullName);

const friends = ['jui', 'juthi', 'hima', 'diba', 'bonna'];
const newFriend = `My best friends are: ${friends[1]} ${friends[3]}`;
console.log(newFriend);

const firstName = 'sumaia';
const lastName = 'mannan';
let value = 9;
const sum = `my full name is: ${firstName} ${lastName}. my favourite number is: ${value * 2}`;
console.log(sum);