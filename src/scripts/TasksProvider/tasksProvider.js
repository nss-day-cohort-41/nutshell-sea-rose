import renderedTasksDOM from './tasksList.js';
import makeTask from './tasksFactory.js';

//Code by Trigg Summs
//Contains my FETCH CALL METHODS!


const url = "http://localhost:3000";

const API = {
    allTasks: [],
    getTasks() {
        return fetch("http://localhost:3000/Tasks")
            .then(response => response.json()).then((tasksArray) => {
                API.allTasks = tasksArray;
            })
    },
   
    addTask: (makeTask) => {
        return fetch("http://localhost:3000/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(makeTask)
        })
            .then(() => API.getTasks()).then((response) => {

                renderedTasksDOM.renderTaskEntries(response)
            })
    },
    getSingleTask: (id) => {
        return fetch(`http://localhost:3000/Tasks/${id}`)
            .then(response => response.json());
    },

    //Because POST is default I should be able to take out headers and body.json.
   
    deleteTask: (id) => {
        return fetch(`http://localhost:3000/Tasks/${id}`, {
            method: "DELETE"
        }).then(() => API.getTasks()).then((response) => {

            renderedTasksDOM.renderTaskEntries(response)
        })
    },
    //Edit operation
    completeTask: (id, makeTask) => {
        return fetch(`http://localhost:3000/Tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(makeTask)
        })
            .then(() => API.getTasks()).then(() => {
                renderedTasksDOM.renderTaskEntries()

            })
        

    },
    getUserId() {
        return fetch(`http://localhost:3000/users/${id}`,) 
            .then(response => response.json())
        }
    
}

export default API;