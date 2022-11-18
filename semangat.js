const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(8080, () => {
  console.log("server run on port 8080");
});

app.get("/semangat/:title", (req, res) => {
  let title = (req.params.title);
  let subTitle = "Semangatku menjadi programmer :)";
  let data = "task not found";
  let message =
    "Selamat istirahat anak-anak R1 yang cantik, ganteng, dan pinter-pinter";
  let note =
    "jangan jagongan di depan kelas kalau ke kantin/kopsis gantian setelah itu cepet kembali ke dalam kelas";

  let response = {
    title: title,
    subTitle: subTitle,
    message: message,
    note: note,
  };

  if (title = "XI RPL 1") {
    res.json(response);
  } else {
    console.log(data)
  }

});
