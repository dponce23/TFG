import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import prodRoutes from "./routes/products.js"
dotenv.config()
const app = express();
const port = process.env.PORT || 9001;

// middleware
app.use(express.json())
app.use("/api", prodRoutes)

//routes
app.get("/", (req, res) => {
    res.send("welcome to my API")
})

// mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((error) => {
        console.log(error
        );
    })

app.listen(port, () => console.log("server listening on port  ", port))