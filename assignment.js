
//*************** problem-01 *******/

function totalFine(fare) {
    
    if (typeof fare !== "number" || fare <= 0)     // Check if fare is a positive number
    {
        return "Invalid";
    }
    
    
    let fine = fare + (fare * 0.2) + 30;   // Calculate fine
    
    return fine; 
}



//******Problem-02 ************/


function onlyCharacter(str) {
    
    if (typeof str !== "string")   //  Check if input is a string
    {
        return "Invalid";
    }

    let withoutSpaces = str.replace(/\s+/g, "");      // Remove all spaces from the string

   
    let upperCaseString = withoutSpaces.toUpperCase();  // Convert input to uppercase

    
    return upperCaseString;
}





// **************Probelem-03 ******** /



function bestTeam(player1, player2)       // Check if both inputs are objects
    {
        if (typeof player1 !== "object" || typeof player2 !== "object" 
        || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2))
    {
        return "Invalid";
    }

    // Calculate total violations for each team
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

   
    if (total1 < total2)    // Compare and decide winner
    {
        return player1.name;
    }
    else if (total2 < total1)
    {
        return player2.name;
    } 
    else
    {
        return "Tie";
    }
}





//********Problem-04*/ 




function isSame(arr1, arr2)
    {
    if (!Array.isArray(arr1) || !Array.isArray(arr2))  // Check if both inputs are arrays
    {
        return "Invalid";
    }

    
    if (arr1.length !== arr2.length)  //Check if lengths are same
    {
        return false;
    }

   
    for (let i = 0; i < arr1.length; i++)  // Compare each element
    {
        if (arr1[i] !== arr2[i]) 
        {
            return false;
        }
    }

    
    return true;
}





// ********problem-05 *******/



function resultReport(marks)
    {

    if (!Array.isArray(marks))
    {
        return "Invalid";
    }

   
    if (marks.length === 0)   // If the array is empty, return all zeros
        {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
             };
    }

    
    let total = 0;
    let passCount = 0;
    let failCount = 0;

    
    for (let i = 0; i < marks.length; i++) 
        {
        total += marks[i]; // add to total

        if (marks[i] >= 40)
        {
            passCount++;
        } 
        else 
        {
            failCount++;
        }
    }

   
    let average = Math.round(total / marks.length);  // Calculate average and round to nearest integer

   
    return {                   // Return the result object
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}
