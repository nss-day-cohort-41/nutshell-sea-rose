//Code by Trigg Summs




const updateFormFields = (taskId) => {

    const hiddenTaskFormId = document.querySelector("#hiddenTaskFormId");
    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
    //const completeStatusInput = document.querySelector("#completeTask--");
   //const userInput = document.querySelector("#user")


    fetch(`http://localhost:3000/Tasks/${taskId}`)
        .then(response => response.json())
        .then(taskObj => {
            hiddenTaskFormId.value = taskObj.id;
            taskTitleInput.value = taskObj.taskTitle;
            taskNameInput.value = taskObj.taskName;
            expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
          // userInput.value = userObj.user;

        })

    
}

export default updateFormFields;














