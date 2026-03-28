
let num1 = Number(prompt("Enter first positive number:"));

let num2 = Number(prompt("Enter second positive number:"));
let num3 = Number(prompt("Enter third positive number:"));


let largest = Math.max(num1, num2, num3);



if (num1<0||num2<0||num3<0)
{
    
    alert("Invalid Input")
}
else
{
    alert("The largest number is: " + largest);   
}