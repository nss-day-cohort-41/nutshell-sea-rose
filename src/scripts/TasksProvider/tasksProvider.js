import  renderedTasksDOM from './tasksList.js';
//import makeTask from './tasksFactory.js';


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
    saveTask: (makeTask) => {
        return fetch("http://localhost:5055/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(makeTask)
        }).then(() => API.getTasks()).then((response) => {

            renderedTasksDOM.renderTaskEntires(response)
        })
    },

    //Because POST is default I should be able to take out headers and body.json.
    //Trying my hand at the delete properties
    deleteTask: (id) => {
        return fetch(`${url}/Tasks/${id}`, {
            method: "DELETE"
        }).then(() => API.getTasks()).then((response) => {

            renderedTasksDOM.renderTaskEntries(response)
        })
    },
//Edit operation....? 
    completeTask: (id, makeTask) => {
        return fetch(`${url}/Tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(makeTasks)   
        }).then(() => API.getTasks()).then((response) => {

            renderedTasksDOM.renderTaskEntries(makeTasks)
        })
    } 
    


}




export default API;