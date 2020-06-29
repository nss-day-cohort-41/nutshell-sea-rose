//code written by JR to add functionality to the "New Article" button.
import makeEventList from "./eventsList.js"
import API from "./eventsProvider.js";

//where the action is happening in the index
const eventContainer = document.querySelector(".postedEvents__Selection");

export default {
    registerEventListeners() {
        //the click even for deleting an article object
        eventContainer.addEventListener("click", event => {
            console.log("test", event.target.id);
            if (event.target.id.startsWith("deleteEvent--")) {
                const eventToDelete = event.target.id.split("--")[1];
                console.log(eventToDelete);

                API.deleteEvent(eventToDelete)
                    .then(makeEventList)
            }
        })
        //playing around with trying to get the timestamp
        //var dateTime = Date();
        //document.getElementById("datetime").innerHTML = dateTime.toLocaleString();
    }
}