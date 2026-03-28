let num = Number(prompt("Enter number:"));
if (isNaN(num) || num < 0) {
  alert("Invalid Input");
} else {
  let myNumbers = [];
  console.log('Even Values under ${num} are:');
  for(let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      myNumbers.push(i);
    }
  }
  console.log(myNumbers)
}