import API from './tasksProvider.js';
import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';
import registerListeners from './tasksClickEvents.js';



//Code by Trigg Summs


//This will pull all my TASKs in the list and render to the DOM
API.getTasks()
  .then(() => renderedTasksDOM.renderTaskEntries());



//Below I am creating EventListener for the add/save task button, as well as creating an alert system for unfilled input fields
document.querySelector("previewTask__Container")
document.querySelector("#taskSave")
  .addEventListener("click", event => {
    let taskTitle = document.querySelector("#taskTitle").value;
    let taskName = document.querySelector("#taskName").value;
    let expectedCompletionDate = document.querySelector("#expectedCompletionDate").value;
    //let currentUser = sessionStorage.getItem("user");
    //console.log(currentUser)

    if (taskTitle !== "" && taskName !== "" && expectedCompletionDate !== "") {
      let createdTaskEntry = makeTask(taskTitle, taskName, expectedCompletionDate)
      API.addTask(createdTaskEntry)
      clearInputs();

    }

    else { alert("Please fill out all required inputs to create a 'Task' entry") }

  })
const clearInputs = () => {

  document.querySelector("#taskTitle").value = "";
  document.querySelector("#taskName").value = "";
  document.querySelector("#expectedCompletionDate").value = "";

}


//Invoking the delete and Edit listener
registerListeners.registerListeners();





















