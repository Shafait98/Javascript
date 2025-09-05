// let str = "I am a programmer";

// let reverse = "";

// for (let n of str)
// {
//     reverse = n + reverse;
// }

// console.log(reverse);





//** reversing with for of */
let name = "Shafait Ul Haque Siddique";
// let reverse = "";

// for(let r of name)
// {
//     console.log(r);
//     reverse = r + reverse;
// }

// console.log(reverse);





//** reversing with for loop   */

// let rev = "";

// for(let i = 0; i <=name.length; i++)
// {
//     // console.log(name[i]);
//     n = name[i];
//     rev = n + rev;
// }
// console.log(rev);



//**reversing with method() */

let reversed = name.split("").reverse().join("");
console.log(reversed);
