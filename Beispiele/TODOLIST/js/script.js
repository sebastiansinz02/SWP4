const tasks = [];
console.log(tasks);

pritnTastList();


document.getElementById("addTask").addEventListener("click", function () {
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
    document.getElementById("taskList").innerHTML = getHTMLTasks();;
}

function getHTMLTasks() {
    var html = "";
    tasks.forEach(element => {
        var checked="";
        if (element.isDone){
            checked = "checked"
        }
        html += "<li><input type='checkbox'" + checked + "/>" + element.isDone + "-" + element.name + "- " + element.responsible + "</li>";
        console.log(element);
    });
    return html;
}