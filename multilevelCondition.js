//discount calculator


const price = 4000;

if(price >=5000)   // for 10% discount
{
    discount = price * 10 / 100;
    payAmount = price - discount;

    console.log("Pay amount after 10% of discount: "+ payAmount);
}

else if(price >= 3500)
{
    discount = price * 5 /100;
    payAmount = price - discount;

    console.log("Pay amount after 5% of discount: " + payAmount);
}

else
{
    console.log("Price: "+ price);
}