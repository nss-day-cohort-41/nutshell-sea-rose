
//Code by Trigg Summs




const updateFormFields = (taskId) => {
	
   const hiddenTaskFormId = document.querySelector("#hiddenTaskFormId");
    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
   const completeStatusInput = document.querySelector("#completeTask--");
  // const completeStatusInput = document.querySelector("#completeStatus");
  
  //I would need to fetch the info to place an updated value
  fetch(`http://localhost:5055/Tasks/${taskId}`)
    .then(response => response.json())
    .then(taskObj => {
        hiddenTaskFormId.value = taskObj.id;
       taskTitleInput.value = taskObj.taskTitle;
       taskNameInput.value = taskObj.taskName;
      expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
    // completeStatusInput.value= taskObj.completeStatus;
    }) 


}

export default updateFormFields;


 





//GRAVEYEARD BELOW:
//Code Below was used for testing and I believe it will be useful in getting the edit process working (6/28/2020)

    
    
    // hiddenTaskForm.value = taskObj.id;
    //taskTitleInput.value = taskObj.taskTitle;
    //taskNameInput.value = taskObj.taskName;
    //expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
    //completeInput.value = taskObj.complete;