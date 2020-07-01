//JR - function that will allow user to create a new article entry with defined parameters
const createArticleEntry = (title, synopsis, url, time) => {
  const articleObj = {
    "title": title,
    "synopsis": synopsis,
    "url": url,
    //I can pass the time here into the database but not sure how to filter or to make it readable
    "time": time,
    
  };

  return articleObj;
};

export default createArticleEntry;