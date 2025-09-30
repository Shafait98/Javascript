// const person = 
// {
//     name: 'Samanta',
//     age: 22,
//     contactNum: '+8801734843953',
//     mail: 'samantasiddique404@gmail.com',
//     bloodGroup: 'A+',
//     education: 'Bachelor of Business Administration',
//     status: 'Married'
// };

// let allContact = person.contactNum;

// console.log(allContact);

// console.log(person['name']);

const car =
{
    brand: 'Toyata',
    cars: ['prius','Corolla Cross', 'Allion','Premieo','Harrier', 'Prado'],
    'colors available': ['perl white','perl black','purple'],
    importDate: '22-03-2025',
    licenseIssue: 'Updated till 27-sep-2027'


};

let gari = car.cars[5];

console.log(car['licenseIssue']);
console.log(car.licenseIssue);

console.log(gari);


//**get & set value */

// let myCar;
let updateLC;

updateLC = car.licenseIssue;

updateLC = 'new LC';

// myCar = car.cars['Lambo','porsha','Maserati'];

console.log(updateLC);