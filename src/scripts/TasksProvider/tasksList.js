//import API from './tasksProvider.js';
//import makeTaskHTMLRepresentation from './tasksDOM.js';


import API from "./tasksProvider.js"
import makeTaskHTML from "./tasksDOM.js"

//render the HTML code into the queried field

const taskContainer = document.querySelector(".previewTask__Container");
//Getting the data from the json then activating my event listeners such as delete
const makeTaskList = () => {
    taskContainer.innerHTML = "";
    API.getAllTasks()
        .then((taskArray) => {
            const allTasks = taskArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
            });
            taskArray.forEach(item => {
                taskContainer.innerHTML += makeTaskHTML(item);
            });

        })
}


export default makeTaskList;
/*
//Code by Trigg Summs




let renderedTasksDOM = {
    //Having to target the previewTask Container to clear the list with every task...*before the for of loop
  renderTaskEntries (interiorTaskObject) {
      //What is makeTaskHTML?
    let makeTaskHTML= document.querySelector("#previewTask__Container")
    makeTaskHTML.innerHTML= ""
    
    for(interiorTaskObject of API.allTasks){
                // Convert the entry object HTML representation
                const taskHTML = makeTaskHTMLRepresentation.taskConverter(interiorTaskObject);
  
                // Find the element in index.html to store information
                const taskElement = document.querySelector('#previewTask__Container');
        
                //Now the converter's info is being shoved into that taskHTML
                taskElement.innerHTML += taskHTML;  
      }
  }
  }
  
  export default renderedTasksDOM;
  */