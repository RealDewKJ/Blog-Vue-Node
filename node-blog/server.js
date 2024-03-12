const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var corsOptions = {
  credentials:true,
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./src/model");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
    // initial();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  // db.sequelize.sync({force: true})
  // .then(() => {
  //   console.log("Drop and Resynce db.");
  // })
app.get("/", (res) => {
    res.json({ message: "Hello world" });   
  });

  require('./src/routes/user.routes')(app);
  require('./src/routes/post.routes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
  