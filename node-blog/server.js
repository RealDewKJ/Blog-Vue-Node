const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  credentials:true,
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./src/model");

  db.sequelize.sync({force: true})
  .then(() => {
    console.log("Drop and Resynce db.");
  })
app.get("/", (res) => {
    res.json({ message: "Hello world" });   
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
  