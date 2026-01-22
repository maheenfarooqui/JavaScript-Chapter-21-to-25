// 1. Write a program that takes two user inputs for first and last name using prompt
// and merge them in a new variable titled fullName
// . Greet the user using his full name.



// var fName = prompt("enter your first name");
// var lName = prompt("enter your last name");
// var fUser = fName.slice(0,1).toUpperCase();
// var fLower = fName.slice(1).toLowerCase();
// var lUser = lName.slice(0,1).toUpperCase();
// var lLower = lName.slice(1).toLowerCase();
// var fullName = fUser+fLower + " " + lUser+lLower;

// document.write("welcome to the website " + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model
// . Find and display the length of user input in your browser

// var userFav = prompt("enter your favourite phone model");
// var strLength = userFav.length;

// console.log(`My favourite phone model is ${userFav} and lenth of string is ${strLength}`);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and
//  display the result in your browser .

// var countryName = "Pakistani";
// var nameIndex = countryName.indexOf("n");
// document.write(`index number of n in ${countryName} is ${nameIndex}`);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and
//  display the result in your browser.
// var word = "Hello World";
// var indexStr = word.lastIndexOf("l");
// document.write(`string ; ${word} last index of l is ${indexStr}`);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var charWord = str.charAt(3);
// document.write(`string ; ${str} character at 3rd is ${charWord}`);

// 6.Repeat Q1 using string concat() method.

// var fName = prompt("enter your first name");
// var lName = prompt("enter your last name");
// var fUser = fName.slice(0,1).toUpperCase().concat((fName.slice(1).toLowerCase()));
// var lUser = lName.slice(0,1).toUpperCase().concat((lName.slice(1).toLowerCase()));

// var fullName= fUser.concat(" ",lUser);

// document.write("welcome to the website " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad";
// var city = str.replace("Hyder","Islam")

// console.log(`city ;${str} after replacement ${city}`);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//   var message = "Ali and Sami are best friends. They play cricket and football together.";
//   var str = message.replaceAll("and","&");
//   console.log(str);

// 9. Write a program that converts a string “472” to a number 472.
//  Display the values & types in your browser.
// var str = "472";
// var num = Number(str);
// console.log(`value ${str} type ${typeof str} value ${num} type ${typeof num}`);

//10. Write a program that takes user input. Convert and show the input in capital letters.
//  var str = prompt("write your name");
//  var strC = str.slice(0).toUpperCase();
//  console.log(strC);

// 11. Write a program that takes user input. Convert and show the input in title case.

// var userWord = prompt("enter word");
// var titleCase = userWord.slice(0,1).toUpperCase().concat((userWord.slice(1).toLowerCase()));
// console.log(`user input ${userWord} user input in titlecase ${titleCase}`);

// 12. Write a program that converts the variable num to string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// console.log(str.replace(".", ""));

//13. Write a program to take user input and store username in a variable.
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
//  For character codes of [@ .Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64

// var userName = prompt("enter your name");
// var flag = true;
// for (var i = 0; i < userName.length; i++) {
//   var codeAt = userName.charCodeAt(i);
//   if (codeAt === 33 || codeAt === 44 || codeAt === 46 || codeAt === 64){
//     flag = false;
//   break;
//   }
// }
// if (flag) {
//   console.log("correct name");
// } else {
//   console.log("enter correct name");
// }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable
//  “search by user input” in an array. After searching, prompt the user whether the given item is found
// in the list or not. Note: Perform case insensitive search. Whether the user enters cookie,
// Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userord = prompt("welcome to hellow bakery what do you want to oder?");
// var isFound = false;

// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i].toLowerCase() === userord.toLowerCase()){
//         isFound = true;
//         alert(`${userord} is available at index ${i}`)
//         break;
//     }
// }
// if(!isFound){
//     alert(`${userord} is not  available`)
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements,
//  prompt the user to enter a valid password
// . For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 48 to 57
// var userPass = prompt("enter your password");
// var hasAlpha = false;
// var hasNum = false;
// var isValid = false;

// if(userPass.length > 6){
//     isValid= true;
// }
// if(userPass.charCodeAt(0) >=48 && userPass.charCodeAt(0) <=57 ){
//     isValid=false;
// }
// for(var i = 0 ;i < userPass.length; i++){
//     var code = userPass.charCodeAt(i)
//     if((code >=65 || code <=90)&&(code >=97 || code <=122)){
//         hasAlpha = true;
//         if(code >=48 || code <57){
//             hasNum=true;

//         }
//     }
// }
// if(hasAlpha,hasNum, isValid){
//     alert("correct password")
// }
// else{
//     prompt("enter a valid password")
// }

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;
//  Display the elements of array in your browser.

// 17. Write a program to display the last character of a user input.
// var userIn = prompt("enter your name");
// var useL = userIn.length;
// var ls = userIn.charAt(useL - 1);
// console.log(ls);



// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number
//  of occurrences of word “the” in given string.



