import  renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';

//Code by Trigg Summs
//Contains my FETCH CALL METHODS!


const url = "http://localhost:5055";

const API = {
    allTasks: [],
    getTasks() {
        return fetch("http://localhost:5055/Tasks")
            .then(response => response.json()).then((tasksArray) => {
                API.allTasks = tasksArray;
            })
    },
//Added Entries, Went through this step with Tyler and Im still trying to wrap my head around it. I guess were invoking the response so that it works with the renderJournalEntries to clear lists?
    addTask: (makeTask) => {
        return fetch("http://localhost:5055/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(makeTask) })
            .then(() => API.getTasks()).then((response) => {

                renderedTasksDOM.renderTaskEntries(response)
        })
    },
        /*     getSingleTask: (id) => {
		return fetch(`${url}/Tasks/${id}`)
		.then(response => response.json());
	}, */

//Because POST is default I should be able to take out headers and body.json.
//Trying my hand at the delete properties
    deleteTask: (id) => {
        return fetch(`http://localhost:5055/Tasks/${id}`, {
            method: "DELETE"
        }).then(() => API.getTasks()).then((response) => {

            renderedTasksDOM.renderTaskEntries(response)
        })
    },
//Edit operation
    completeTask: (id, makeTask) => {
        return fetch(`http://localhost:5055/Tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(makeTask)   
        })
        .then(() => API.getTasks()).then(() => {

            renderedTasksDOM.renderTaskEntries()})
    } 
    


}

export default API;