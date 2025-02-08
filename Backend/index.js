const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());

const ques = require("./routes/Questions")
//mount
app.use("/api/v1", ques);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})