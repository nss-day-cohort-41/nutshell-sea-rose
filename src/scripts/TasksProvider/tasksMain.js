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









//ORIGINAL EDIT PROCESS BELOW--->Mimics utilizing the original input fields as editors:
// This is where I have begun the eventlistening process for the complete/edit feature. Currently I am targetting an incorrect field
const completeTask = document.querySelector("#taskEdit")
completeTask.addEventListener("click", event => {
  console.log("yeet")




  if (hiddenTaskFormId.value !== "") {

    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
    //GRAVEYARD:const completeStatusInput = document.querySelector("#completeStatus").value;



    API.completeTask(hiddenTaskFormId.value, makeTask(taskTitleInput.value, taskNameInput.value, expectedCompletionDateInput.value))
      .then(() => {
        return API.getTasks()
      }).then((response) => {
        clearInputs();
        renderedTasksDOM.renderTaskEntries(response)

      });
  }

  else {
    const createdTaskEntry = makeTask(taskTitleInput, taskNameInput, expectedCompletionDateInput)
    API.addTask(createdTaskEntry)

    console.log("should be able to see the save a new one functionality");
  }

});




//Invoking the delete and Edit listener
registerListeners.registerListeners();




















//GRAVEYARD:
/* if (completeStatusInput.value === false) {
  // hiddenTaskFormId.value !== "") {

   //const taskTitleInput = document.querySelector("#taskTitle");
   //const taskNameInput = document.querySelector("#taskName");
   //const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
   const completeStatusInput = document.querySelector("#completeStatus").value;



   API.completeTask(hiddenTaskFormId.value, makeTask(completeStatusInput.value ))
     .then(() => {
       //return API.getTasks()
       // }).then((response)=>{
       clearInputs();
       renderedTasksDOM.renderTaskEntries()
     }); 
     return completeStatusInput.value === "Complete" 
 }

//  else {
 //  const createdTaskEntry = makeTask(taskTitleInput, taskNameInput, expectedCompletionDateInput, completeStatusInput)
   API.addTask(createdTaskEntry)
   // Save functionality goes here?
   console.log("should be able to see the save a new one functionality");
 }

}); */







// This is where I have begun the eventlistening process for the complete/edit feature. Currently I am targetting an incorrect field
/* const completeTask = document.querySelector("#taskEdit")
completeTask.addEventListener("click", event => {
  console.log("yeet")


  //GRAVEYARD: const hiddenTaskFormId = document.querySelector("#hiddenTaskFormId");
  if (completeStatusInput.value === false) {
   // let boolValue (value ^= true) = ""
 
    const completeStatusInput = document.querySelector("#taskEdit").value;
    


    API.completeTask(makeTask(completeStatusInput.value))
      .then(()=> {
        console.log("EventListener:Api is running the complete task feature");
        //clearInputs(); //Would control the clearing of the checkmark

        //The process below render the process to the API then delete them from the tak preview container?
        //renderedTasksDOM.renderTaskEntries();
        //API.deleteTask(renderedTaskDOM.renderTaskEntries());
        
      }); 

  }

  else {
    //const createdTaskEntry = makeTask(completeStatusInput.value)
    //API.addTask(createdTaskEntry)
    alert("Cmon now")
    console.log("should be able to see the save a new one functionality");
  }
}); */
 




//Invoking the delete and Edit listener
//registerListeners.registerListeners();




