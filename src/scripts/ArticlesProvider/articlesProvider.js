//code written by JR. Functionality is to fetch sample data from json server
const API = {
    getAllArticles: () => {
        return fetch("http://localhost:3000/articles")
        .then(response => response.json());
    }
}

export default API; 