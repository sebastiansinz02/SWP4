
// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight


 var r = Math.floor(Math.random()*6) + 5;

switch(r){
    case 5: 
            console.log("five");
            break;
    case 6: 
            console.log("six");
            break;
    case 7: 
            console.log("seven");
            break;
    case 8: 
            console.log("eight");
            break;
    case 9: 
            console.log("nine");
            break;
    case 10: 
            console.log("ten");
            break;
}