//**Array of array 2D array */

const team = [
['A','B','C', 'D'],
['Score','Concern','Designation','Salary'],
[100,'Team Project Management', 'Developers',98000],
[98,'Team Sales','Engineer',30000],
[97,'Team Marketing','Engineer',112000]
];
const name = team[2][1] = 'Team Tesla';

console.log(name);

for(let t of team)
{
    console.log(t);
}