//JR - function that will allow user to create a new article entry with defined parameters
const createArticleEntry = (title, synopsis, url) => {
    const newArticleEntry = {
      "title": title,
      "synopsis": synopsis,
      "url": url
    };
  
    return newArticleEntry;
  };
  
  export default createArticleEntry;