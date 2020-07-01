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
			
			else if	(event.target.id.startsWith("completeTask--")) {
				const taskToComplete = event.target.id.split("--")[1]
				//let boolValue = (value ^= true)
				console.log("hell yuh, this is the clickEvent for completeTask", taskToComplete);
		
				//const completeStatusInput = document.querySelector("#completeStatus").value;

				let newTaskEdit = API.getSingleTask(taskToComplete)
//SingleTask
				 .then(task=> {
			//console.log("1", task)
					newTaskEdit = task;
					task.completeStatus = true 
			console.log("2", task)
					return task;	
				})
				
			console.log("yuh....singleTAsk", newTaskEdit)
//CompleteTask
			.then(task=>API.completeTasks(task))
			.then(task=>API.getTasks(task))
			renderedTasksDOM.renderTaskEntries()
			return task; 
			} 
			//.then(API.getTasks(newTaskEdit))
			console.log("yus...completeTask",newTaskEdit)
				})
			},

			




			clearInputs(){
			document.querySelector("#hiddenEntryForm").value = "";		
			document.querySelector("#taskTitle").value = "";
			document.querySelector("#taskName").value = "";
			document.querySelector("#expectedCompletionDate").value = "";
			document.querySelector("#completeStatus").value = "";  
			}
		
		}
		
		
		
		//GRAVEYARD: 
		//API.completeTask(taskToComplete)
		//.then((API.getTasks))
		//.then(renderTaskEntries)
		//.then(() => API.getTasks()).then((taskToComplete) => {
		
		//renderedTasksDOM.renderTaskEntries(makeTask)})
		//This else if statement may be wrong
		//updateFormFields(taskToComplete)......for ref. all of this "else if statement" is based off of edit entry from my journalentries				
		//updateFormFields(taskToComplete)
		 //(boolValue ^= true)	

				
		//.then(API.completeTask(makeTask.completeStatus === value.true ))
		//.then(API.completeTask(taskObj.completeStatus === value.true))
		//.then(taskToComplete => API.getTasks)
		//.then(renderTaskEntries)
		//.then()    DELETE
	
		// .then(taskFinish=>{
		//	   return API.renderTasksDOM.renderTaskEntries

		
				
		//API.completeTask(newTaskEdit)
		//.then(newTaskEdit).then (()=> {
		//	return API.getTasks()
		//})
				 




































/*
GRAVEYARD FOR ORIGINAL EDIT FEATURE
}
            //Maybe use an array method to target an id and mark complete field from true to false
            else if(event.target.id.startsWith("completeTask--")) {
				const taskToComplete = event.target.id.split("--")[1];
				console.log("hell yuh, this is the clickEvent for completeTask", taskToComplete);
 
				updateFormFields(taskToComplete)

			}
		})
	},
	//Maybe recall the clear inputs function ?
	clearInputs(){
		//document.querySelector("#hiddenEntryForm").value = "";
		document.querySelector("#taskTitle").value = "";
		document.querySelector("#taskName"),value = "";
		document.querySelector("#expectedCompletionDate").value = "";
		document.querySelector("#complete").value = "";  
	}

}



//GRAVEYARD: 
//API.completeTask(taskToComplete)
//.then((API.getTasks))
//.then(renderTaskEntries)
//.then(() => API.getTasks()).then((taskToComplete) => {

//renderedTasksDOM.renderTaskEntries(makeTask)})
//This else if statement may be wrong
//updateFormFields(taskToComplete)......for ref. all of this "else if statement" is based off of edit entry from my journalentries */