## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## process

In order to create a random password generator I first created individual files for html, css, and javascript. 

Then I proceeded to link both the css and javascript files onto my html thus creating external css and javascript files. 

I also added a link to bootstrap since I planned on using it for styling the page. 

Next I added the text onto my html that'll provide the user with context and directions as to how to create a password for themselves. As well as a navbar that I acquired from bootstrap.

Next I styled the page simply to improve user interaction. 

With the javascript, I first created the variables for the prompts then for all the characters that are asked for. I then created an if/else statment for the amount of characters that then allows the other functions to go forward. I then added an event for the button to click initiate all the conditions for what characters the user wants included in order to generate a password. Once it is initiated if/else statements will decide what to include into the final password. All of these conditions then go into the for loop to actually generate a random password. 