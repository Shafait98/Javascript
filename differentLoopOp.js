//************check if the given range of number divisible by 5 ******/

// let i;
// for(i = 1; i<=50;i++)
// {
//     if(i%5 === 0)
//     {
//         console.log(i);
//     }
// }


//************** check if the given range of number divisible by 3,5 & 10 & then count the total sum of divisible numbers*/ 
 
let sum = 0;
console.log("The numbers are: ")
for(let i = 1; i<=100; i++)
{  
    if(i % 3 === 0 || i % 5 === 0 || i % 10 === 0)
    {
        sum = sum + i;
        console.log(i);
    }
}

console. log("The total sum of: ",sum);