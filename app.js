const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Taruh ini paling bawah setalh app.get untuk route/halaman kosong
app.use("/", (req, res) => {
  res.status(404);
  res.send("Durung Ono Halaman ee cough");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
