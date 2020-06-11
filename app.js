const express = require("express");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

connectDB();

app.use(require("./routes/home"));

app.listen(PORT, () =>
  console.log(`Server is up and running at port no. ${PORT}...`)
);
