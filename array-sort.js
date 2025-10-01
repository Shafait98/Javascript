
//** array sorting with sort() method */
const numbers = [5,9,7,3,2,1,4,6,8];

console.log(numbers);
numbers.sort();
console.log(numbers);

const subNum = [50,12,330,160,6,1,3,789];
subNum.sort();
console.log(subNum);

//**Manual sorting */

const age = [22,100,8,2,23,41,12,18,33];

//** sort in ascending order */
const sortAge = age.sort(
    
    function(a, b) 
    {
        return a-b;
    }
);

console.log(sortAge);

//**sort in descending order */
const sortAged = age.sort(
    function(a,b)
    {
        return b-a;
    }
);

console.log(sortAged);