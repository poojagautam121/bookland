const fetch = require("node-fetch");
// const api_url =
//   "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyDfZ0w7PT1H4d93MP9O1TJDbIGF6lflPnc";

const api_url = "https://www.googleapis.com/books/v1/volumes";

const api_key = "AIzaSyDfZ0w7PT1H4d93MP9O1TJDbIGF6lflPnc";

exports.getBook = async (req, res) => {
  console.log("inside fun======", req.body);
  const querystring = `?q=${req.body.book}&key=${api_key}`;
  const response = await fetch(api_url + querystring);

  const result = await response.json();
  res.render("book.dot", { result: result.items });
};

// exports.getBook = async (req, res) => {
//   console.log("inside fun======", req.body);
//   const querystring = `?q=${req.body.book}&key=${api_key}`;
//   await fetch(api_url + querystring)
//     .then(function (response) {
//       const result = response.json();
//       res.render("book.dot", { result: result.items, status: 200 });
//     })
//     .catch(function (error) {
//       console.log("Request failed", { msg: error, status: 500 });
//     });
// };
