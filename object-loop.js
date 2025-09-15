let bike =
{
    name: 'Hunk',
    model: '2018',
    cc: 150,
    hp: 15.6,
    torque: '12.6 NM'

};

for(let pr in bike)
{
    console.log(pr); // print keys of object
    console.log(bike[pr]); // print value of object
}