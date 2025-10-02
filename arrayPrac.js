const myNum = [12,11,1,56,34,98,423,4574,8,22];

const sortNum = myNum.sort();

console.log( "Normal sorting: " + sortNum);

//** ascending sort */

const ascendingSort = myNum.sort(function(a,b) {return a-b;});

console.log( "ascending sorting: " + ascendingSort);

//**descending sort */

const descendingSort = myNum.sort(function(a,b) {return b-a;});

console.log( "descending sorting: "  + descendingSort);

//** array of object & traversing */

const students = [ {name: "Farhan", id:"19-41324-3", department: "CSE", boodGroup: "O+"},
                  {name: "Abir", id:"19-41322-3", department: "CSE", boodGroup: "B+"},
                  {name: "Prottush", id:"19-41234-3", department: "CSE", boodGroup: "A+"},
                     {name: "Shafin", id:"19-41134-3", department: "CSE", boodGroup: "B-"},
                   {name: "Tehan", id:"19-41128-3", department: "CSE", boodGroup: "O+"}
]

for(let stu of students)
{
    console.log(stu);
}

console.log(students[2].boodGroup);