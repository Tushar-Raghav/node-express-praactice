import express from "express";
import { createStudent, getAllStudents, updateStudent } from "../controllers/student.controller.js";

const studentRouter = express.Router();


studentRouter.post("/",createStudent)
studentRouter.put("/:id",updateStudent)
studentRouter.get("/",getAllStudents)
// studentRouter.delete("/",deleteAllStudents)
// studentRouter.delete("/:id",deleteStudentById)
// studentRouter.get("/:id",getStudentById)
// studentRouter.get("/:email",getStudentById)


export default studentRouter