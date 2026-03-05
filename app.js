import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/student.routes.js";
//creating server------------------------------
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

//connecting mongodb
try {
    await mongoose.connect("mongodb://localhost:27017/myappdb");

    console.log("MongoDB Connected");
} catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
}


// welcome api--------------
app.get("/", (req, res) => {
  res.send("Hello from ES6 Express 🚀");
});

app.use("/student",studentRouter)


app.listen(port,()=>{
console.log(`Listening on PORT -> ${port}`)
})

