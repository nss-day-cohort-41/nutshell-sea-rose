import API from './tasksProvider.js';
import renderTaskEntries from "./tasksList.js";
import updateFormFields from "./tasksFieldForms.js" 
import makeTask from './tasksFactory.js';

//Code by Trigg Summs
//The code below contains my array methods applied to my Delete/Edit  methods


const previewTaskContainer = document.querySelector("#previewTask__Container");

export default {

	registerListeners() {
		//
		previewTaskContainer.addEventListener("click", event => {
			//console.log("what the heck is the event", event.target.id);
			if (event.target.id.startsWith("deleteTask--")) {
				const taskToDelete = event.target.id.split("--")[1];
				console.log("hell yuh, this is the clickEvent for taskToDelete", taskToDelete);

				API.deleteTask(taskToDelete)
                .then((API.getTasks))
                .then(renderTaskEntries)
  
			}
			
			else if	(event.target.id.startsWith("editTask--")) {
				const taskToComplete = event.target.id.split("--")[1]
				//let boolValue = (value ^= true)
				console.log("hell yuh, this is the clickEvent for completeTask", taskToComplete);
				updateFormFields(taskToComplete)
	
			}
			})

		
	
	}
}