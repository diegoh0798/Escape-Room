var readLineSync = require('readline-sync');
var playerName = readLineSync.question("May I have your Name please?");

var welcomeMessage = `Welcome ${playerName} to the Escape Room Simulator!`;
console.log(welcomeMessage);

var isPlayerAlive = true;
var hasFoundKey = false;

while (isPlayerAlive == true) {
    const menuID = readLineSync.keyIn(`Enter 1 to put hand in the hole \n Enter 2 to find the key, \n Enter 3 to open the door`, {limit: '$<1-3>'});
    if (menuID == 1) {
        console.log(`${playerName}, oh no your dead, Game Over.`);
        isPlayerAlive = false;
    } else if (menuID == 2 && hasFoundKey == false) {
        console.log(`${playerName}, you found the key. Proceed to option 3 and to open the door.`);
        hasFoundKey = true;
    } else if (menuID == 2 && hasFoundKey == true) {
        console.log(`${playerName}, it appears you already have the key. Don't waste time with this menu option and proceed to menu option 3 to open the door.`);
    } else if (menuID == 3 && hasFoundKey == false) {
        console.log(`${playerName}, you have not found the key yet, proceed to menu option 2 and find the key.`);
    } else if (menuID == 3 && hasFoundKey == true) {
        console.log(`${playerName}, Congratulations you have opened the door successfully!`);
        isPlayerAlive = false;
    }
}