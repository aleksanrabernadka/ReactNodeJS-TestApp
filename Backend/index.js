const { Router } = require("express");
const express = require("express");
const getApartments = require("./controller")
const port = 5003;

const app = express();
const router = express.Router();
router.route("/apartments/").get(getApartments); //http://localhost:5003/api/apartments/
app.use("/api/", router);
app.use(express.json());
app.listen(port);
