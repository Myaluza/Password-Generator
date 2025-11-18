const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstDisplay = document.getElementById("display1")
let secondDisplay = document.getElementById("display2")

function generatePassword() {
    let passwordArray = ["", ""]
    let passwordLength = 8

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < passwordLength; j++) {
            let randonIndex = Math.floor(Math.random() * (characters.length - 1))
            passwordArray[i] += characters[randonIndex]
        }
    }

    firstDisplay.textContent = passwordArray[0]
    secondDisplay.textContent = passwordArray[1]
}