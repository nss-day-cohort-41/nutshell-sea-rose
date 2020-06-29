//JR - function that will allow user to create a new article entry with defined parameters
const createEventEntry = (name, date, location) => {
    const newEventEntry = {
        "name": name,
        "date": date,
        "location": location
    };

    return newEventEntry;
};

export default createEventEntry;