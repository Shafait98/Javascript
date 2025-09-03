let name = "Samanta Siddique";
let sp = name.slice(2,7) ; // it will slice the value of string by the indexing order
console.log(sp);


let sentence = "I am good at programming, I believe in myself. I'm learning and growing";

 //if we keep split("") like this it will separate all character including white space

console.log(sentence.split(' '));


let friendStr = "abir,prottush,shafin,rakib";

friend = friendStr.split(","); // it will store the string value in an array, then it will separate each by comma
console.log(friend);
console.log(friendStr);


let realF = ["rakib","salek","shafin"];


console.log(realF.join('|'));
