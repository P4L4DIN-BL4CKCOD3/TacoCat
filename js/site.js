//The first thing we need to do is to "get" the user input or string from the page.
//We can do this with the "DOM" or Document Object Model in JS. 
//CONTROLLER FUNCTION
function getValue(){    
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    //Check for palindrome.
    let returnObj = checkForPalindrome(userString);

    //Display message to screen.
    displayMessage(returnObj);    
}

//The second thing we want to do is to check if the string is a palindrome.
//LOGIC FUNCTION
function checkForPalindrome(userString){
    //Convert string to lower case.
    userString = userString.toLowerCase();
    //Remove spaces and special characters in string.
    //Use regex to remove the selected parameters.
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];//Array
    let returnObj = {};//Object

    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    }
    
    else{
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }        
    }
    returnObj.reversed = revString;
    return returnObj;
}

//The third thing we want to do is to display the results to the user.
//VIEW FUNCTION
function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed} `;
    document.getElementById("alert").classList.remove("invisible");
}