const express = require("express");
const empsRelatedRoutes = require("./routes/emps");

const app = express();

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());

app.use("/emps", empsRelatedRoutes);

app.listen(7575, () => {
  console.log("server started at 7575");
});
