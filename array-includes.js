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