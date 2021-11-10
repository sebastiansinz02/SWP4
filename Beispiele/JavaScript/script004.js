// Erstelle zwei Zufallszahl zwischen 0 und 100
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger


let random = Math.random() *100;
let random2 = Math.random() *100;
let randomAsInteger = Math.round(random);
let randomAsInteger2 = Math.round(random2);

console.log(randomAsInteger);
console.log(randomAsInteger2);


if (randomAsInteger<50 && randomAsInteger<randomAsInteger2){
    console.log("Zahl 1 ist kleiner als Zahl 2 mini");
}


if (randomAsInteger<30 || randomAsInteger2<30){
    console.log("Eine der beiden ist kleiner als 30")
}

if(randomAsInteger<50 && randomAsInteger2!=50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}
