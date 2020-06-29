import API from './tasksProvider.js';
import renderTaskEntries from "./tasksList.js";
import updateFormFields from "./tasksFieldForms.js" 

//Code by Trigg Summs
//The code below contains my array methods applied to my Delete/Edit  methods


const previewTaskContainer = document.querySelector("#previewTask__Container");

export default {

	registerListeners() {
		//Do i want my EventListener on previewTask Container
		previewTaskContainer.addEventListener("click", event => {
			console.log("what the heck is the event", event.target.id);
			//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteTask--")) {
				const taskToDelete = event.target.id.split("--")[1];
				console.log("hell yuh, this is the clickEvent for taskToDelete", taskToDelete);

				API.deleteTask(taskToDelete)
                .then((API.getTasks))
                .then(renderTaskEntries)
                
            }
            //Maybe use an array method to target an id and mark complete field from true to false
            else if(event.target.id.startsWith("completeTask--")) {
				const taskToComplete = event.target.id.split("--")[1];
				console.log("hell yuh, this is the clickEvent for completeTask", taskToComplete);

				//API.completeTask(taskToComplete)
				//.then((API.getTasks))
				//.then(renderTaskEntries) 
				updateFormFields(taskToComplete);
                //This else if statement may be wrong
                //updateFormFields(taskToComplete)......for ref. all of this "else if statement" is based off of edit entry from my journalentries
			}
		})
	}
}