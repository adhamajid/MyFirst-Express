const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama :'Adha Syah Majid',
  //   email : 'adhasyahm@gmail.com',
  //   noHp : '08994163562',
  // })
  res.sendFile('./index.html',{root:__dirname});
});

app.get("/product/:id", (req, res) => {
  res.send('Product with ID: ' + req.params.id);
})

app.get("/about", (req, res) => {
  res.send("About Me!");
})

//Taruh ini paling bawah setalh app.get untuk route/halaman kosong
app.use("/", (req, res) => {
  res.status(404);
  res.send("Durung Ono Halaman ee cough");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
