function registerEvents() {
    document.getElementById("loadTodos").addEventListener("click", function() {
        loadTodos();
    })
    document.getElementById("loadUsers").addEventListener("click", function() {
        alert("user");
    })
}

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = " ";
            data.forEach(todo => {
                html += "<li>" + todo.title + "</li>";

            });
            document.getElementById("list").innerHTML = html;
            console.log(html);
        })
        .catch(function(err) {
            console.log(err);
        });
}




registerEvents();