
const updateFormFields = (taskObj) => {
	// Get reference to input fields in the form
    const hiddenTaskForm = document.querySelector("#hiddenTaskForm");
    const taskTitleInput = document.querySelector("#taskTitle");
    const taskNameInput = document.querySelector("#taskName");
    const expectedCompletionDateInput = document.querySelector("#expectedCompletionDate");
    //const completeInput = document.querySelector("#complete");


    hiddenTaskForm.value = taskObj.id;
    taskTitleInput.value = taskObj.taskTitle;
    taskNameInput.value = taskObj.taskName;
    expectedCompletionDateInput.value = taskObj.expectedCompletionDate;
    //completeInput.value = taskObj.complete;
}

export default updateFormFields;


