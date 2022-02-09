
loadTabelle();

function loadTabelle() {
    fetch('https://www.openligadb.de/api/getbltable/bl1/2021')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            data.forEach(element => {
                html += "<li>" + element.TeamName + " Punkte: " + element.Points+ "</li>";

            });
            document.getElementById("table").innerHTML = html;

        })
        .catch(function(err) {
            console.log(err);
        });
}