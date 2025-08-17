//*** Continue means the specific condition will totally skip by the loop */

// for(let i = 0; i < 30; i++)
// {
//     if(i % 2 === 1)
//     {
//         continue;
//     }

//     console.log(i);
// }


let n = 0;
while(n <= 50)
{
      n++;
    if(n % 5 === 0)
    {
        continue;
    }
  
    console.log(n);
}