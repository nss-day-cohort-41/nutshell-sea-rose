const makeTask = (taskTitle, taskName, expectedCompletionDate, complete) => {
	const basicTaskObject = {
        
        taskTitle: taskTitle,
        taskName: taskName,
        expectedCompletionDate: expectedCompletionDate
        //complete: complete
	}

	return basicTaskObject;
}

export default makeTask;