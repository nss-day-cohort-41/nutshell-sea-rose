//JR - function that will allow user to create a new article entry with defined parameters
const createArticleEntry = (title, synopsis, url) => {
  const articleObj = {
      "title": title,
      "synopsis": synopsis,
      "url": url
  };

  return articleObj;
};

export default createArticleEntry;