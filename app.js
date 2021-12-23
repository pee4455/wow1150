const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productRouter = express.Router

const app = express();
const port = process.env.port ;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req, res) => {
  res.send("Hello world !! Im product");
})

productRouter.route("/1").get((req, res) => {
  res.send("Hello world !! Im product 1");
})

app.use("/products", productRouter);

app.get("/", (req, res) => {

     res.render('index',{username: 'peeza66', customers:["Kitty","Kittikorn","Kitit"]});
  // res.send("Hello born11111"); // แสดงหน้าจอ
  
});

app.listen(port, () => {
  console.log("listening on port" + port); // with console.log
  debug("listening on port" + port); // with debug
});
