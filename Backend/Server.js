require('dotenv').config();
const express = require("express");
const cors = require('cors');
require("./db/db.js");
const router = express.Router();
const messageRouter = require("./Routes/UserRoute.js");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(messageRouter);

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});