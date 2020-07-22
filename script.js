//variables for user input to decide which characters to create password
var lowCase = ("abcdefghijklmnopqrstuvwyxz".split(""))
var uppCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
var specChar = ("!@#$%&".split(""))
var numbers = ("1234567890".split(""))
var numChar

// the html elements 
var button = document.getElementById("button")
var display = document.getElementById("display")

//functions needed to create final password
var password
var characters = []

//initiates event
button.addEventListener("click", function(e) {  
        numChar = prompt("How many characters would you like?")
            if (numChar < 8 || numChar > 128) {
                prompt("Pick a number between 8 and 128")
            } 
    var askLow = confirm("Would you like lower case letters?")
    var askUpp = confirm("Would you upper case letters?")
    var askSpecChar = confirm("Would you like specials characters?")
    var askNumbers = confirm("Would you like numbers?") 

//conditions based on user input        
        if (askLow == true) {
            for (var i= 0; i < lowCase.length; i++){
                characters.push(lowCase[i]) 
            }
        } 
        if (askUpp == true) {
            for (var i= 0; i < uppCase.length; i++){
                characters.push(uppCase[i])
            }
        }
        if (askSpecChar == true) {
            for (var i= 0; i < specChar.length; i++) {
                characters.push(specChar[i])
            }
        }
        if (askNumbers == true) {
            for (var i= 0; i < numbers.length; i++){
                characters.push(numbers[i])
            }
        }
//creates random password based on user inputs
    var password = ""
 for (var i = 0; i < numChar; i++) {
     password = password + characters[Math.floor(Math.random() * characters.length)]
 }
 console.log(password)
display.value = password
})


