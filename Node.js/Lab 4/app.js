const express = require("express");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

// static files
app.use("/assets", express.static(__dirname + "/public"));

// Middleware
// not found error
const notFoundMiddleware = require("./middleware/not-found");

// Routers
const userRouter = require("./routes/users");

// Routes
app.use("/api", userRouter);
app.use(notFoundMiddleware); // if route does not exist

// Port
const port = process.env.PORT || 3000;

// Starting the server
const start = () => {
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();
