var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var engine = require("express-dot-engine");

var app = express();
//let config = require("./config/config");

// view engine setup;
app.engine("dot", engine.__express);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "dot");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(1300);

module.exports = app;
