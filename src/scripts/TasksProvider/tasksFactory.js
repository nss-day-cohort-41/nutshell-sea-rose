//Code by Trigg Summs 
//Factory Object Created Below



const makeTask = (taskTitle, taskName, expectedCompletionDate, completeStatus, userId) => {
        const taskObj = {


                taskTitle: taskTitle,
                taskName: taskName,
                expectedCompletionDate: expectedCompletionDate,
                completeStatus: false,
                userId: userId
        }

        return taskObj;
}

export default makeTask;

