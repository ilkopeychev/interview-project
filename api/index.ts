const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

// preload the data in memory
const stringifiedJsonData = fs.readFileSync("./data.json").toString();
const jsonData = JSON.parse(stringifiedJsonData);

app.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(jsonData).end();
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:4000/`);
});
