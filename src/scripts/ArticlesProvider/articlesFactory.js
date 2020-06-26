const createArticleEntry = (title, synopsis, url) => {
    const newArticleEntry = {
      "title": title,
      "synopsis": synopsis,
      "url": url
    };
  
    return newArticleEntry;
  };
  
  export default createArticleEntry;