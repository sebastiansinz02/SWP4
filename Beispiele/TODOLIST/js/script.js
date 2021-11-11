
const tasks = ["putzen", "tanzen", "kochen"];
pritnTastList();


document.getElementById("addTask").addEventListener("click", function () {
    var newTask = document.getElementById("txtNewTask").value
    tasks.push(newTask);
    pritnTastList();
});

function pritnTastList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();;
}

function getHTMLTasks() {
    var html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>";
        console.log(element);
    });
    return html;
}