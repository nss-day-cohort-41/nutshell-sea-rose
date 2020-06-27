import API from './tasksProvider.js';
import makeTaskHTMLRepresentation from './tasksDOM.js';







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