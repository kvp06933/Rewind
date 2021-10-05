

//get starting values from the screen
//Controller Function

function getString(){
    //get the user's input
    let userString = document.getElementById("message").value;
    //version 2 - test the user's input for length
    

    //Reverse the user's input - this is a separate function
    let revString = reverseString(userString);
    //Display the result - this is a separate function
    displayRetrograde(revString);
    
   
}

//logic function
 function reverseString(userString){
    let startValue = userString.length-1;
    let endValue = 0;
    let revString = "";
    //User input = Frank
    //Frank is a string AND an array of characters
    //In a decremented for loop the startValue must be higher than the endValue
    for (let index = startValue; index >= endValue; index--) {
        revString += userString[index];
        
    }
    return revString;
 }
//display function
 function displayRetrograde(revString){
    let output = document.getElementById("results");

    output.innerHTML = revString; // This replaces/overwrites the innerHTML with revString
 }


