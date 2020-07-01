//Code by Trigg Summs
//This contains my HTML representation and Converter Function


const makeTaskHTMLRepresentation = {
    taskConverter(taskObj) {

        return `
    
    <section class="hiddentask--${taskObj.id}">
            <h2>${taskObj.taskTitle}</h2>
                <p><i>Task Details:</i> ${taskObj.taskName}</p>
                <p><i>Expected Completion Date:</i> ${taskObj.expectedCompletionDate}</p>
                <button id="deleteTask--${taskObj.id}">Delete</button> 
                <button id="editTask--${taskObj.id}">Edit</button>
                
    </section>
    `
    }


}

export default makeTaskHTMLRepresentation;



//<input class= "checkbox" id="completeTask--${taskObj.id}" type="checkbox">Update As Complete!</input>
