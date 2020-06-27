import API from './tasksProvider.js';
import renderTaskEntries from "./tasksList.js"; 


//import updateFormFields from "./taskFormFields.js"
//Possibly utilize if the edit button is utilized


const previewTaskContainer = document.querySelector("#previewTask__Container");

export default {
	registerListeners() {
		previewTaskContainer.addEventListener("click", event => {
			console.log("what the heck is the event", event.target.id);
			//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteTask--")) {
				const taskToDelete = event.target.id.split("--")[1];
				console.log(taskToDelete);

				API.deleteTask(taskToDelete)
                .then((API.getTasks))
                .then(renderTaskEntries)
                
            }
            //Maybe use an array method to target an id and delete
            else if(event.target.id.startsWith("completeTask--")) {
				const taskToComplete = event.target.id.split("--")[1];
				console.log(taskToComplete);

                updateFormFields(taskToComplete);
                //This else if statement may be wrong
                //updateFormFields(taskToComplete)......for ref. all of this "else if statement" is based off of edit entry from my journalentries
			}
		})
	}
}