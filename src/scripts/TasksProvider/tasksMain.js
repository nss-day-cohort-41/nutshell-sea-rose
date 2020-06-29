import API from './tasksProvider.js';
import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';
import registerListeners from './tasksClickEvents.js';
//import updateFormFields from './tasksFieldForms.js'


//Code by Trigg Summs
//6-28 Status ---> I currently have everything working except for the populating of the put fetch. 
//I need to look more specifically into the date error codes. Lastly LOGIC will need to be written for the "complete task checkbox"



API.getTasks()
.then(()=> renderedTasksDOM.renderTaskEntries()); 


document.querySelector("previewTask__Container")
document.querySelector("#taskSave")
.addEventListener("click", event => { 
//Will need to make a second target for delete or complete button?
  /*
      Collect the user info by selecting the input fields, one
      at a time, and accessing the `value` property
  */

  let taskTitle = document.querySelector("#taskTitle").value;
  let taskName = document.querySelector("#taskName").value;
  let expectedCompletionDate = document.querySelector("#expectedCompletionDate").value;
  //let complete = document.querySelector("#complete");

  if (taskTitle !== "" && taskName !== "" && expectedCompletionDate !== "")
  { let createdTaskEntry= makeTask(taskTitle, taskName, expectedCompletionDate)
     API.addTask(createdTaskEntry)}
     
else { alert("Please fill out all required inputs to create a 'Task' entry")}
// && complete !== ""
})

  
const clearInputs = () => {
	//document.querySelector("#hiddenEntryForm").value = "";
	document.querySelector("#taskTitle").value = "";
	document.querySelector("#taskName"),value = "";
	document.querySelector("#expectedCompletionDate").value = "";
	//document.querySelector("#complete").value = "";  
}
  
registerListeners.registerListeners();
//I went ahead and toggled the Listeners for testing, below I have targeted the "edit" button 
const saveTask = document.querySelector("#completeTask--")
saveTask.addEventListener("click", event => {
console.log("yeet")
  //  const hiddenTaskForm = document.querySelector("#hiddenTaskForm");
  // if (hiddenTaskForm.value !== "")
  
 {
    
		const taskTitleInput = document.querySelector("#taskTitle");
		const taskNameInput = document.querySelector("#taskName");
		const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
		//const completeInput = document.querySelector("#complete").value;

   


		API.completeTask(taskObj(taskTitleInput.value, taskNameInput.value, expectedCompletionDateInput.value))
		.then(() => {
           return API.getTasks()
          }).then((response)=>{
            clearInputs();
            renderedTasksDOM.renderTaskEntries(response)
		});
  } 
    
   {
		// Save functionality goes here?
		console.log("should be able to see the save a new one functionality");
    } 
  
});
 

 


//Invoking the delete and Edit listener
registerListeners.registerListeners();