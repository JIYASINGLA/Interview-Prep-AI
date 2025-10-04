require("dotenv").config();
const express = require("express");
const cors=require("cors");
const path=require("path");

const app = express();

//Middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-type", "Authorization"],
    })
);

//Middleware
app.use(express.json());

//Routes

//Serve uploads folder
app.use("/uploads", express.static(path.json(__dirname, "uploads"), {}));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));