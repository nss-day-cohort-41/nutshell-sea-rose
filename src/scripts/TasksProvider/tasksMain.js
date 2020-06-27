import API from './tasksProvider.js';
import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';
import registerListeners from './tasksClickEvents.js';
import updateFormFields from './tasksFieldForms.js'


//Current Status 6/27---> Ive been trying a few different tweaks with no sucess. Currently I am able to post null statements and delete but my edit functionality is not working.









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

  let taskTitle = document.querySelector("#taskTitle");
  let taskName = document.querySelector("#taskName");
  let expectedCompletionDate = document.querySelector("#expectedCompletionDate");
  let complete = document.querySelector("#complete");

  if (taskTitle !== "" && taskName !== "" && expectedCompletionDate !== "")
  { let createdTaskEntry= makeTask(taskTitle, taskName, expectedCompletionDate)
     API.addTask(createdTaskEntry)}
     
else { alert("Please fill out all required inputs to create a 'Task' entry")}
// && complete !== ""
})

  
const clearInputs = () => {
	document.querySelector("#hiddenEntryForm").value = "";
	document.querySelector("#taskTitle").value = "";
	document.querySelector("#taskName").value = "";
	document.querySelector("#expectedCompletionDate").value = "";
	//document.querySelector("#complete").value = "";  
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
		//const completeInput = document.querySelector("#complete").value;
		
		API.completeTask(hiddenTaskForm.value, taskObj(taskTitleInput, taskNameInput, expectedCompletionDateInput))
		.then(() => {
            clearInputs();
            renderedTasksDOM.renderTaskEntries()
		});
    } else {
		// Save functionality goes here
		console.log("should be able to see the save a new one functionality");
    }

});
 

 


//Invoking the delete and Edit listener
registerListeners.registerListeners();