//Code by Trigg Summs
//This contains my HTML representation and Converter Function


const makeTaskHTMLRepresentation = {
    taskConverter(taskObj) {

        return `
    <div class="tasks__card"> 
    <section class="hiddentask--${taskObj.id}">
            <h2>${taskObj.taskTitle}</h2>
                <p><i>Task Details:</i> ${taskObj.taskName}</p>
                <p><i>Expected Completion Date:</i> ${taskObj.expectedCompletionDate}</p>
                <button id="deleteTask--${taskObj.id}">Delete Task</button> 
                <button id="editTask--${taskObj.id}">Edit Task</button>
    </section>
    </div>
    `
    }


}

export default makeTaskHTMLRepresentation;


//<button id="SaveChanges--${taskObj.id}" type="submit" value="">Save Changes</button>
//<input class= "checkbox" id="completeTask--${taskObj.id}" type="checkbox">Update As Complete!</input>


//<input class= "checkbox" id="completeTask--${taskObj.id}" type="checkbox">Update As Complete!</input>
// 
