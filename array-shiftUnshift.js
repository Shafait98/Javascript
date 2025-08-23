let fair = [200, 300, 250, 220, 800];
for(let fr of fair)
{
    console.log(fr);
}

fair.shift();  // pop out element from index [0]
console.log(fair);

fair.unshift(150); // append element from index[0]
console.log(fair);


let friends = ["Shafin","Abir","Rakib", "Salek","Prottush"];

friends.shift();
for(let fr of friends)
{
    console.log(fr);
}


friends.unshift("Farhan");
for(let fr of friends)
{
    console.log(fr);
}