//**array is non-primitive data type so if we copy an array & put it on a variable then the reference will be the same,,
// for an example if we change the value of a second one the first one value will be change cause it's memory contain the same reference*/
let numbers = [1,2,3,4,5];
let num2 = numbers;

num2[0] = 9;

console.log(numbers);
console.log(num2);


//** array copy technique with separate memory reference */

                //**technique 01 */
let students = ['farhan','javed','akib', 'sakib','nakib'];
let studentCpy = [];

for(let stu of students)
{
    studentCpy.push(stu);
}

console.log(students);
console.log(studentCpy);

studentCpy[1] = 'samanta';

console.log();

console.log(students);    // we can see the value of second array first index is changed without changing the first array
console.log(studentCpy);

console.log();


//** technique 02 */

let employees = ['mark','steve','loren','bill'];

const newEmp = Array.from(employees);

console.log(employees);
console.log(newEmp);
console.log();
newEmp[2] = 'sam';
employees[1] = 'jhon';

console.log(employees);
console.log(newEmp);
console.log();

//** technique 03 */

let cats = ['persian', 'bengal','russian van','stiva'];

let newCat = [].concat(cats);

console.log(cats);
console.log(newCat);
console.log();

cats[0]= 'billu';

console.log(cats);
console.log(newCat);


