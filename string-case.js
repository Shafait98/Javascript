const bike = "Hunk";
const rider = "hunk";

if(bike === rider) // the output will be "Nice Bike!" because string is case sensitive
{
    console.log("Ahh! it's an master piece of Hero Honda. I have one")
}

else
{
  console.log("Nice Bike!");
}

// but we can actually check the value of a string

if(bike.toLowerCase() === rider.toLowerCase()) // the output will be true 
{
    console.log("Ahh! it's an master piece of Hero Honda. I have one")
}

else 
{
    console.log("Nice Bike!");
}


//***Understanding the trim() function */


const name =" Farhan";
const Lname = "Farhan ";

if(name.trim() === Lname.trim()) //trim() removes all white space from string
{
    console.log("That's my name!");
}

else
{
   console.log("Oh try again");
}