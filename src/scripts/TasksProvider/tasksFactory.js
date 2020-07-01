//Code by Trigg Summs 
//Factory Object Created Below



const makeTask = ( taskTitle, taskName, expectedCompletionDate, completeStatus) => {
	const taskObj = {
        
           
        taskTitle: taskTitle,
        taskName: taskName,
        expectedCompletionDate: expectedCompletionDate,
        completeStatus: false
	}

	return taskObj;
}

export default makeTask;


//GRAVEYEARD BELOW:

// userId: userId.sessionStorage?, 