import API from "./eventsProvider.js"
import makeEventList from "./eventsList.js"
import createEventEntry from "./eventsFactory.js"

//render the original list into the browser
API.getAllEvents().then((response) => makeEventList(response));
//save a new one once all required fields are entered
const recordEventEntry = document.querySelector(".save__event")
recordEventEntry.addEventListener("click", event => {
    event.preventDefault(); //dont refresh page automatically
    const name = document.querySelector(".event__title").value
    const date = document.querySelector(".event__date").value
    const location = document.querySelector(".event__location").value
    const user = sessionStorage.getItem("user");

    if (name === "" || date === "" || location === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newEvent = createEventEntry(name, date, location, user)
        console.log(newEvent)
        API.saveEventEntry(newEvent)
        API.getAllEvents().then((response) => makeEventList(response));
    }
})

document.querySelector(".postedEvents__Selection").addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEvent--")) {
        const eventToDelete = event.target.id.split("--")[1]
        console.log(eventToDelete);
        API.deleteEvent(eventToDelete)
            .then(makeEventList)
    }
})

const eventFormVisibilityButton = document.querySelector("#toggle__events")

eventFormVisibilityButton.addEventListener("click", (clickEvent) => {
    document.querySelector(".newEvent__form").classList.toggle("hidden")
})