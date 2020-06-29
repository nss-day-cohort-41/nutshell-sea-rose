
//Code by Trigg Summs




const updateFormFields = (taskObj) => {
	
   // const hiddenTaskForm = document.querySelector("#hiddenTaskForm");
    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
    //const completeInput = document.querySelector("#complete");
  
  
    // hiddenTaskForm.value = taskObj.id;
    taskTitleInput.value = taskObj.taskTitle;
    taskNameInput.value = taskObj.taskName;
    expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
    //completeInput.value = taskObj.complete;


}

export default updateFormFields;


 





//GRAVEYEARD BELOW:
//Code Below was used for testing and I believe it will be useful in getting the edit process working (6/28/2020)
/*     fetch("http://localhost:5055/Tasks")
    .then(response=>response.json())
    .then(taskObj => {
        taskTitleInput.value = taskObj.taskTitle;
        taskNameInput.value = taskObj.taskName;
        expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
    }) */