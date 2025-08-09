const isLeader = true;
let price = 300;

// if(isLeader === true)                    // normal condition
// {
//     price = 0;
// }
// else
// {
//     price = price + 100;
// }

price = isLeader===true ? 0 : price + 100;   // ternary condition

console.log(price);