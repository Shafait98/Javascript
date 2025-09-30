//**reversing with unshift */

let numbers = [10,20,30,40,50,60];

let rev = [];

for(let i = 0; i < numbers.length; i++)
{
    rev.unshift(numbers[i]);
}

console.log(rev);


//**reversing with decrement */

let pc = ['Asus','Hp','lenevo','Mac','Acer'];

let reverse = [];

for( let i = pc.length - 1; i >=0; i--)
{
    reverse.push(pc[i]);
}

console.log(reverse);