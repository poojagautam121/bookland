const fetch = require("node-fetch");

const api_url = "https://www.googleapis.com/books/v1/volumes";

const api_key = "AIzaSyDfZ0w7PT1H4d93MP9O1TJDbIGF6lflPnc";

exports.getBook = async (req, res) => {
  const querystring = `?q=${req.body.book}+intitle:${req.body.book}&key=${api_key}`;
  const response = await fetch(api_url + querystring);

  const result = await response.json();
  if (result.items) {
    res.render("book.dot", { result: result.items });
  } else {
    res.render("error.dot", { result: [] });
  }
};
