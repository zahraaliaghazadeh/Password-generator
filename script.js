



//defining them as true false variable
var passAlpha = true;
var passalpha = true;
var passNum = true;
var passSpCh = true;

//ask user if they want each category for their password, if user cancel it makes it false
// function charactertype() {
var passAlpha = confirm(" Click Ok if you like to have upper case alphabets in your password ");
var passalpha = confirm(" Click Ok if you like to have lower case alphabets in your password ");
var passNum = confirm(" Click Ok if you like to have numbers in your password ");
var passSpCh = confirm(" Click Ok if you like to have special characters in your password? ");
// }

// if user did not choose any of the categories, alert a message { my code gives error with this code and I dont know why :(( }
// If(passAlpha === false && passalpha === false && passNum === false && passSpCh === false) {
//     alert("You need to choose at least one category!");
//     // charactertype();
// }

//alert these messages to user about what categories they selected, altho it wasnt necessary :\
alert("You want upper case alphabets: " + passAlpha);
alert("You want lower case alphabets: " + passalpha);
alert("You want numbers: " + passNum);
alert("You want special characters: " + passSpCh);

//list of my four arrays for four categories
var Alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpCh = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "_", ".", "/", ":", ";", "<", ">", "=", "?", "?", "@", "[", "]", "^", "`", "~", "{", "}", "|"];


// //variables to store the length of each var, not necessary
// var arrAlphalength = Alpha.length;
// var arralphalength = alpha.length;
// var arrNumlength = Num.length;
// var arrSpChlength = SpCh.length;

// //trying with random selection from each array hmm
// for (var m=0; m <....)
// var number1 = Math.floor(Math.random(arrAlphalength));
// var number2 = Math.floor(Math.random(arralphalength));
// var number3 = Math.floor(Math.random(arrNumlength));
// var number4 = Math.floor(Math.random(arrSpChlength));


//trying to log each one of my four choice arrays, learnt from activity 26 example 1
for (var i = 0; i < Alpha.length; i++) {
    console.log(Alpha.length[i]);
}
for (var j = 0; j < alpha.length; j++) {
    console.log(alpha.length[j]);

}
for (var k = 0; k < Num.length; k++) {
    console.log(Num.length[j]);

}
for (var l = 0; l < SpCh.length; l++) {
    console.log(SpCh.length[j]);

}

// //trying to do the stuff above in a loop, learnt from activity 26 example 2, but was giving me error
// for ( var i=0, i<Alpha.length; i++){
//     console.log(Alpha[i]);
// }
// for ( var j=0, j<alpha.length; j++){
//     console.log(alpha[j]);
// }
// for ( var k=0, k<Num.length; k++){
//     console.log(Num[k]);
// }
// for ( var l=0, l<SpCh.length; l++){
//     console.log(SpCh[l]);
// }

// consoleInside(Alpha);
// consoleInside(alpha);
// consoleInside(Num);
// consoleInside(SpCh);

//function to randomly select from my arrays
function randomlyselect(randomarray) {
    f = Math.floor(Math.random() * (randomarray.length));
    return randomarray[f];
}
//trying to make an empty choices array , learnt from activity 25, use push
function generatePassword(){
    //empty array
    var choicesarr = [];
//asking user what they want the length to be and store in a variable
var Usersfavlength = prompt("How Long Do You want the Password to be? (It has to be between 8 and 128)");
while (Usersfavlength < 8 || Usersfavlength > 128) {
    alert("Please choose a number between 8 and 128!")
}


    if (passAlpha) {
        choicesarr.push(...Alpha);
    }
    if (passalpha) {
        choicesarr.push(...alpha);
    }
    if (passNum) {
        choicesarr.push(...Num);
    }
    if (passSpCh) {
        choicesarr.push(...SpCh);
    }




//empty string
var passwordstring = "";
for (p = 0; p < Usersfavlength; p++) {
    g = randomlyselect(choicesarr);
    passwordstring += g;
}
return passwordstring;
}





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














