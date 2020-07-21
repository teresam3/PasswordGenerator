var numChar = prompt("How many characters?")
//var askLow = confirm("Would you like lower case letters?")
//var askUpp = confirm("Would you upper case letters?")
var lowCase = ("abcdefghijklmnopqrstuvwyx".split(""))
var uppCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
var specChar = ("!@#$%&".split(""))
var numbers = ("1234567890".split(""))
var password = []

if (numChar < 8 || numChar > 128) {
    alert("another number")
}

//if ((askLow === true) || (askupp === true)) {
    for (var i = 0; i < numChar; i++) {
        var randomLow = lowCase[Math.floor(Math.random() * lowCase.length)] 
        
        
        password.push(randomLow)
    }
    console.log(password.join(""))














