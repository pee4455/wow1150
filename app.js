const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.port ;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/", (req, res) => {

     res.render('index',{username: 'peeza66', customers:["Kitty","Kittikorn","Kitit"]});
  // res.send("Hello born11111"); // แสดงหน้าจอ
  
});

app.listen(port, () => {
  console.log("listening on port" + port); // with console.log
  debug("listening on port" + port); // with debug
});
