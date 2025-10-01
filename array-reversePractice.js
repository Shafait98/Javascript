const flowers = ['Teulip','Sunflower','Cherry Blosoom','Rose'];

const flowerRev = [];

// for(let i = flowers.length - 1; i >= 0; i--)   //array reversing technique 01
// {
//     console.log(flowers[i]);
//     flowerRev.push(flowers[i]);
// }

// console.log(flowerRev);



// for(const fl of flowers)   // array reversing technique forOf loop with unshift method
// {
//     flowerRev.unshift(fl);
// }

// console.log(flowerRev);

console.log(flowers.reverse());   // reversing with built in reverse() method