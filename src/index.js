const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("port successfully");
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));
