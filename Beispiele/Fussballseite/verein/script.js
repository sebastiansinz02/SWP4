loadTabelle();

function loadTabelle() {
  fetch("https://www.openligadb.de/api/getbltable/bl1/2021")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach((element) => {
        html += "<li>" + element.TeamName + "</li>";
      });
      document.getElementById("verein").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}
