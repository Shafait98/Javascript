

function doDouble(number, doTripple)
{
    if(doTripple === true)
    {
        let res = number * 2;
        return res;
    }
    else 
    {
        let res = number * 3;
        return res;
    }
}

const rt = doDouble(22,true);
const rt2 = doDouble(22,false);

console.log("Double of 22 : ",rt);
console.log("Tripple of 22 : ",rt2);


//** playing with array  */

function numberOfElements(number)
{
const result = number;
const len = number.length;
console.log("The length of the array: ",len);
return result;
}

const show = numberOfElements([22,23,43,642,11,34,212,44]);
console.log(show);

function getAge(person)
{
   
    let age = person.age;
    console.log(person);
    return age;
}

let rs = getAge({name : "Shafait", age : 25, occupation : "software Engineer" });
    console.log(rs);

    //**playing with object property in function */

function getHeight(person)
{
    if(person.height === 5.6)
    {
        return person
    }

    else
    {
        return "regret mail!";
    }
}

const run = getHeight({name:'Shafait', age : 25, height : 5.6, bloodGroup : 'O+'});
const run2 = getHeight({name:'Farhan', age : 26, height : 5.9, bloodGroup : 'O+'});

console.log('result: ',run);
console.log('result: ',run2);