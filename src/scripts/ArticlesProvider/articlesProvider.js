//code written by JR. Functionality is to fetch sample data from json server
const API = {
    getAllArticles: () => {
        return fetch("http://localhost:3000/articles")
        .then(response => response.json());
    },

    saveArticleEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },
    deleteArticle: (id) => {
        return fetch("http://localhost:3000/articles", {
            method: "DELETE"
        }).then(response => response.json());
    }
}

export default API; 