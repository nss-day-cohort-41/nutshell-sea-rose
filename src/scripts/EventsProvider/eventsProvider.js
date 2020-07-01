//code written by JR. Functionality is to fetch sample data from json server
const API = {
    //get articles from json
    getAllEvents: () => {
        return fetch("http://localhost:3000/events")
            .then(response => response.json());
    },
    //save and send new articles to json
    saveEventEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());
    },
    //delete articles from json
    deleteEvent: (id) => {
        return fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    }
}

export default API; 