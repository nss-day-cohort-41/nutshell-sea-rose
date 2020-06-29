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
    //GRAVEYARD: let complete = document.querySelector("#complete");

    if (taskTitle !== "" && taskName !== "" && expectedCompletionDate !== "") {
      let createdTaskEntry = makeTask(taskTitle, taskName, expectedCompletionDate)
      API.addTask(createdTaskEntry)
    }

    else { alert("Please fill out all required inputs to create a 'Task' entry") }
    //GRAVEYARD: && complete !== ""
  })

//This is a function for clearing the initial submitted task fields,  *upon clicking the save button
const clearInputs = () => {
  document.querySelector("#hiddenEntryForm").value = "";
  document.querySelector("#taskTitle").value = "";
  document.querySelector("#taskName"), value = "";
  document.querySelector("#expectedCompletionDate").value = "";
  //GRAVEYARD:document.querySelector("#complete").value = "";  
}






//NOTE TO SELF: I HAVE ADDED LISTENERS AT THIS STEP FOR T/S'ing....please remove at completion of section
registerListeners.registerListeners();



// This is where I have begun the eventlistening process for the complete/edit feature. Currently I am targetting an incorrect field
const completeTask = document.querySelector("#taskEdit")
completeTask.addEventListener("click", event => {
  console.log("yeet")


  //GRAVEYARD: const hiddenTaskFormId = document.querySelector("#hiddenTaskFormId");
  if (hiddenTaskFormId.value !== "") {

    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
    //GRAVEYARD:const completeInput = document.querySelector("#complete").value;




    API.completeTask(hiddenTaskFormId.value, makeTask(taskTitleInput.value, taskNameInput.value, expectedCompletionDateInput.value))
      .then(() => {
        //return API.getTasks()
        // }).then((response)=>{
        clearInputs();
        renderedTasksDOM.renderTaskEntries()
      });
  }

  else {
    const createdTaskEntry = makeTask(taskTitleInput, taskNameInput, expectedCompletionDateInput)
    API.addTask(createdTaskEntry)
    // Save functionality goes here?
    console.log("should be able to see the save a new one functionality");
  }

});




//Invoking the delete and Edit listener
registerListeners.registerListeners();