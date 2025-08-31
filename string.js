let country = "Banglaadesh"; 
let money =[10,15,25,45,65,90];

console.log(country.length);
console.log(money.length);
money[2] = 4562;  // array can change the value of index because it's mutable
console.log(money);
country[2] = "d";          // it's didn't change the value of index 02 because string is  immutable
console.log(country);