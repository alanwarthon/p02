let num1 = Number(prompt("Pick a number "));
let num2 = Number(prompt("Pick another number "));

let sum = num1 + num2;
alert("The sum is:\n"+sum);

/**
 * Using a template literal string
 */

let amount_to_pay = 35;
let item_name = 'Iphone 12 pro max';
let client_name = 'Ethan';

let thankyou_message = `Hi, ${client_name}, thanks for the order of the ${item_name}, the amount to pay is ${amount_to_pay}.00 CAD.`;
console.log(thankyou_message);
