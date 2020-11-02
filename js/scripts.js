function listOfTasks() {
  this.tasks = [];
  this.currentId = 0;
}

listOfTasks.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

listOfTasks.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

listOfTasks.prototype.findTask = function(id) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  }
}

function Task (whatItIs, time) {
  this.whatItIs = whatItIs;
  this.time = time;
}

let list = new listOfTasks();

function displayTaskDetails(listOfTasksToDisplay) {
  let taskList = $("ul#tasks");
  let htmlForLocationInfo = "";
  listOfTasksToDisplay.tasks.forEach(function(task) {
    htmlForLocationInfo += "<li id=" + task.id + ">" + task.whatItIs + ", at: " + task.time + "</li>";
  });
  taskList.html(htmlForLocationInfo);
}

$(document).ready(function() {
  $("#taskForm").submit(function(event) {
    event.preventDefault();
    let taskName = $("input#taskName").val();
    let taskTime = $("input#taskTime").val();
    let task1 = new Task (taskName,taskTime);
    list.addTask(task1);
    displayTaskDetails(list);
  });
});