import API from './tasksProvider.js';
import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';
import registerListeners from './tasksClickEvents.js';



API.getTasks()
.then(()=> renderedTasksDOM.renderTaskEntries()); 

//const entryLogContainer 
document.querySelector("#previewTask__Container")
document.querySelector("#button__taskSave")
.addEventListener("click", event => { 
//Will need to make a second target for dlete or complete button?
  /*
      Collect the user info by selecting the input fields, one
      at a time, and accessing the `value` property
  */

//Need to target the ID's****************************************************************************************
  let taskTitle = document.querySelector("#taskTitle").value;
  let taskName = document.querySelector("#taskName").value;
  let expectedCompletionDate = document.querySelector("#expectedCompletionDate").value;
  let complete = document.querySelector("#complete").value;

  if (concept !== "" && date !== "" && mood !== "" && entry !== "")
  { let createdTaskEntry= createdTask(taskTitle, taskName, expectedCompletionDate, complete)
     API.addTask(createdTaskEntry)}
     //AddTask may the wrong value
else { alert("Please fill out all required inputs to create a 'Task' entry")}

})

const clearInputs = () => {
	//document.querySelector("#hiddenEntryForm").value = "";
	document.querySelector("#taskTitle").value = "";
	document.querySelector("#taskName").value = "";
	document.querySelector("#expectedCompletionDate").value = "";
	document.querySelector("#complete").value = "";  
}
 

//Would I want to target the edit or save ID?
const saveTask = document.querySelector("#button__taskSave")
saveTask.addEventListener("click", event => {
console.log("yeet")
    const hiddenTaskForm = document.querySelector("#hiddenTaskForm");

    if (hiddenTaskForm.value !== "") {
		const taskTitleInput = document.querySelector("#taskTitle").value;
		const taskNameInput = document.querySelector("#taskName").value;
		const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate").value;
		const completeInput = document.querySelector("#complete").value;
		//(concept, date, mood, entry)
		API.updateTask(hiddenTaskForm.value, taskObj(taskTitleInput, taskNameInput, expectedCompletionDateInput, completeInput))
		.then(() => {
            clearInputs();
            renderedTasksDOM.renderTaskEntries()
		});
    } else {
		// Save functionality goes here
		console.log("should be able tp see the save a new one functionality");
    }

});
 

 


//Invoking the delete and Edit listener
registerListeners.registerListeners();