//Code by Trigg Summs 
//Factory Object Created Below



const makeTask = (taskTitle, taskName, expectedCompletionDate) => {
	const taskObj = {
        
        taskTitle: taskTitle,
        taskName: taskName,
        expectedCompletionDate: expectedCompletionDate
        
	}

	return taskObj;
}

export default makeTask;


//GRAVEYEARD BELOW:
//complete: complete