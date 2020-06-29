import API from "./eventsProvider.js"
import makeEventList from "./eventsList.js"
//import newEventButton from "./eventsClickEvents.js"
import createEventEntry from "./eventsFactory.js"

//render the original list into the browser
API.getAllEvents().then((response) => makeEventList(response));
//save a new one once all required fields are entered
const recordEventEntry = document.querySelector(".save__event")
recordEventEntry.addEventListener("click", event => {
    const name = document.querySelector(".event__title").value
    const date = document.querySelector(".event__date").value
    const location = document.querySelector(".event__location").value

    if (name === "" || date === "" || location === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newEvent = createEventEntry(name, date, location)
        console.log(newEvent)
        API.saveEventEntry(newEvent)//.then(() => {
        API.getAllEvents().then((response) => makeEventList(response));
        //})
    }
})

