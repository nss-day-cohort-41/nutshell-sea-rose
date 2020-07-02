//Code by Trigg Summs 
//Factory Object Created Below



const makeTask = (taskTitle, taskName, expectedCompletionDate, completeStatus, user) => {
        const taskObj = {


                taskTitle: taskTitle,
                taskName: taskName,
                expectedCompletionDate: expectedCompletionDate,
                completeStatus: false,
                user: user
        }

        return taskObj;
}

export default makeTask;

