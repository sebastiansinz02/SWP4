console.log("hello");




function clickToConvert() {
    var amoutofMoney = document.getElementById("Euro").value
    var dollar = 1.1250;
    var convert = amoutofMoney * dollar + "$";
    alert("Der berechnete Betrag ist " + convert + " in Dollar");
}