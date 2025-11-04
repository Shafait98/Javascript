// checking if the given number is even or odd


function isEven(number) 
{
    if(number % 2 === 0)
    {
       return true;
    }
    else
        {
            return false;
        }
}

let res = isEven(10);
let res2 = isEven(7);
console.log(res);
console.log(res2);

// checking if the given number's difference is odd or even with boolean

function diffOdd(num1,num2)
{
    let diff = num1 - num2;
    if(diff % 2 === 1)
    {
        console.log("the given number's difference is a odd number!");
        return true;
    }
    else
        {
            console.log("the given number's difference is a even number")
            return false;
        }
}

let result = diffOdd(50,20);
console.log(result);


