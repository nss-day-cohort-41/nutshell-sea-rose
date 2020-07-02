//Code by Trigg Summs 
//Factory Object Created Below



const makeTask = (taskTitle, expectedCompletionDate) => {
        const taskObj = {


                taskTitle: taskTitle,
                //taskName: taskName,
                expectedCompletionDate: expectedCompletionDate,
                //completeStatus: false,
                //userId: userId
        }

        return taskObj;
}

export default makeTask;

