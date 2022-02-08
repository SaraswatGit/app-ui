const express = require("express");

const app = express();

app.use(express.json());

app.get("/response", (req, res) => {
  res.send("Response From MOCK-SERVER");
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port : " + port);
});