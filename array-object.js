const employees = [
    {name: ' Farhan', age: 25, designation: 'Software Engineer', salary: 30000},

    {name:'shafait', age: 26, designation: 'Network Engineer', salary: 28000},

    {name: 'Fahmid', age: 26, designation: 'Data Analyst', salary: 32000},

    {name: 'Akib', age: 24, designation: 'Product Manager', salary: 30000}

];

console.log(employees[2]);
console.log(employees[3].name, ' ', employees[3].age);
console.log(employees[0].name, ' ', employees[0].age);
console.log(employees[1].name, ' ', employees[1].age);


employees[2].designation = 'Site Engineer'; // changing the value of an object's property

console.log(employees[2]);

for(let emp of employees)
{
    console.log(emp);
}

for(let emp of employees)
{
    console.log('Age: ' + emp.age);
}