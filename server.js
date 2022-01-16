import express from "express";
import mongoose from "mongoose";
import casesRoutes from "./routes/cases.js";
import studentsRoutes from "./routes/students.js";
import cors from "cors";
//const casesRoutes = require("./routes/cases");

//app config
const app = express();
const port = process.env.PORT || 9000;

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
});

// middleware: ceci permet d'avoir notre objet complet lors de la reponse du server
app.use(express.json());
app.use(cors());
app.use("/cases", casesRoutes);
app.use("/students", studentsRoutes);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

//DB config
const connection_url =
  "mongodb+srv://babs:renard64@cluster0.kawoz.mongodb.net/coronavirus?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
});

// api routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));