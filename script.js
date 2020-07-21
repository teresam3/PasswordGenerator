var numChar = prompt("How many characters?")
var askLow = confirm("Would you like lower case letters?")
var askUpp = confirm("Would you upper case letters?")
var lowCase = ("abcdefghijklmnopqrstuvwyx".split(""))
var uppCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
var specChar = ("!@#$%&".split(""))
var numbers = ("1234567890".split(""))

var password = []

var display = document.getElementById("#display")

//the max and min limits of the intial prompt
if (numChar < 8 || numChar > 128) { ;
    alert("another number") ;
} 

display.addEventListener("click", function(e) {
 ;
} )

    for (var i = 0; i < numChar; i++) {
    var passwordAll = lowCase[Math.floor(Math.random() * lowCase.length)] ;
        
     password.push(passwordAll) ;

    console.log(password.join("")    
     
    // }
    //  for (var j = 0; j < numChar; j++) {
    //  var randomUpp = uppCase[Math.floor(Math.random() * uppCase.length)] 
        
    //   password.push(randomUpp)
    //  }
    //  for (var i = 0; i < numChar; i++) {
    //  var randomSpec = specChar[Math.floor(Math.random() * specChar.length)] 
        
    //  password.push(randomSpec)
    // }
    // for (var i = 0; i < numChar; i++) {
    // var randomNum = numbers[Math.floor(Math.random() * numbers.length)] 
        
    // password.push(randomNum)
    

    