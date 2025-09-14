let pLanguage = [`C++`, `java` ,`C#`];

// console.log(pLanguage);

// for(let ln of pLanguage)
// {
//     console.log(ln);
// }


console.log(pLanguage.join(' / '));


for(let i of pLanguage)
{
    console.log(i);
    // console.log(join('/'));
}

let word = "JavaScript";
let letters = word.split(''); 
console.log(letters);      // ['J','a','v','a','S','c','r','i','p','t']
console.log(letters.join('-'));     // J-a-v-a-S-c-r-i-p-t
// console.log(word.join('-'));  