import express from "express";
const app = express();
import "./connection.js";
import Person from "./database.js";
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./build'));

app.get("/", (req, res) => {
  res.json({ status: "Welcome from the Server Side!" });
});

app.post("/details", async (req, res) => {
  const data = await Person.find(req.body);
  res.json(data);
});

app.post("/save", async (req, res) => {
  const saveDetails = new Person(req.body);
  const data = await saveDetails.save();
  if (data) {
    res.json({ status: "Data Saved to Database", mobile: req.body.mobile });
  } else {
    res.json({ status: "Data Not Saved to Database" });
  }
});

app.listen(port, () => {
  console.log(`Server is Listening to the port ${port}`);
});
