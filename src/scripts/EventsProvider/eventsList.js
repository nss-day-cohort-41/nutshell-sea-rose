import API from "./eventsProvider.js"
import makeEventHTML from "./eventsDOM.js"
//import registerEventListeners from "./eventsClickEvents.js"
//render the HTML code into the queried field

const eventContainer = document.querySelector(".postedEvents__Selection");
//Getting the data from the json then activating my event listeners such as delete
const makeEventList = () => {
    eventContainer.innerHTML = "";
    API.getAllEvents()
        .then((eventArray) => {
            const allEvents = eventArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
            });
            eventArray.forEach(item => {
                eventContainer.innerHTML += makeEventHTML(item);
            });
         //   registerEventListeners.registerEventListeners();
        })
}




//const renderArticleEntries = (articleEntries) => {
//  for (const entry of articleEntries) {
//    const articleHTML = makeEventHTML(entry)
//  const articleElement = document.querySelector(".postedEvents__Selection");
//articleElement.innerHTML += articleHTML
//}
//}

export default makeEventList;