const expree = require("express");
const contactsRouter = require("./app/routes/contact.route");

const cors = require("cors");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contack book application." });
}
);
module.exports = app;
