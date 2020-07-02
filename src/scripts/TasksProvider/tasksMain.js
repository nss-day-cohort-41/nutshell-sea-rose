import makeTaskList from "./tasksList.js"
import API from "./tasksProvider.js"
import makeTask from "./tasksFactory.js"

//const taskFormVisibility = document.querySelector("#toggle__tasks")

//taskFormVisibility.addEventListener("click", (clickEvent) => {
  //  document.querySelector(".newtask__form").classList.toggle("hidden")
//})

API.getAllTasks().then((response) => makeTaskList(response));

//save a new one once all required fields are entered
const recordTaskEntry = document.querySelector("#taskSave")
recordTaskEntry.addEventListener("click", event => {
    event.preventDefault(); //dont refresh page automatically
    //const username = document.querySelector(".friend__name").value
    //let taskTitle = document.querySelector("#taskTitle").value;
    let taskName = document.querySelector("#taskName").value;
    let expectedCompletionDate = document.querySelector("#expectedCompletionDate").value;

    if (taskName === "" || expectedCompletionDate === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newTask = makeTask(taskName, expectedCompletionDate)
        console.log(newTask)
        API.saveTaskEntry(newTask)
        API.getAllTasks().then((response) => makeTaskList(response));
    }
})

document.querySelector(".previewTask__Container").addEventListener("click", event => {
    if (event.target.id.startsWith("deleteTask--")) {
        const taskToDelete = event.target.id.split("--")[1]
        console.log(taskToDelete);
        API.deleteTask(taskToDelete)
            .then(makeTaskList)
    }
})




/*
import API from './tasksProvider.js';
import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';
import registerListeners from './tasksClickEvents.js';
//import updateFormFields from './tasksFieldForms.js'


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





/* 
		//Event Listener for hiding the Task Section

		const taskFormVisibilityButton = document.querySelector("#toggle__tasks")
		taskFormVisibilityButton.addEventListener("click", (clickEvent) => {
			document.querySelector(".newtask__form").classList.toggle("hidden")
		})

 */



//Invoking the delete and Edit listener
//registerListeners.registerListeners();




















