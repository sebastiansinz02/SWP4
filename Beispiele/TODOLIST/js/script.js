const tasks = [];
console.log(tasks);

pritnTastList();


document.getElementById("addTask").addEventListener("click", function() {
    addTask();
});

function addTask() {
    var taskName = document.getElementById("txtNewTask").value
    var taskResponsible = document.getElementById("txtResponsible").value
    var task = { name: taskName, responsible: taskResponsible, isDone: false };
    tasks.push(task);

    pritnTastList();
}

function pritnTastList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask() {

    alert("marking Task");
}

function getHTMLTasks() {
    var html = " ";
    var index = 0;

    tasks.forEach(element => {
        var checked = "";
        if (element.isDone) {
            checked = "checked";
        }
        html += "<li><input onClick='markTask(this)' name='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + element.name + "- " + element.responsible + "-" + index + "</li>";
        index++;
    });
    return html;
}