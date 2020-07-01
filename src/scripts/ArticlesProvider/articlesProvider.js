//code written by JR. Functionality is to fetch sample data from json server

const API = {

    getAllArticles() {
        return fetch("http://localhost:3000/articles")
            .then(response => response.json())
    },

    //save and send new articles to json
    saveArticleEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());

    },
    //delete articles from json
    deleteArticle(id) {
        return fetch(`http://localhost:3000/articles/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())

    }
}

export default API; 