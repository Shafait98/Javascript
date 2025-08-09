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


// price = isLeader===true ? 0 : price + 100;   // ternary condition





// if(isLeader===true)
// {
//     if(price>1000)
//     {
//         price = price / 2;
//     }

//     else
//     {
//     price = 0;
//     }
// }

// else 
// {
//     price = price +100;
// }


price = isLeader===true ? price>1000 ? price/2: 0 : price + 100;


console.log(price);