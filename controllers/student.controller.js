import { createStudentService, getAllStudentsService, updateStudentService } from "../services/student.service.js";

export const createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    console.log("createStudent:: ",studentData)
    const student = await createStudentService(studentData);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
export const updateStudent = async (req, res) => {

  try {

    const studentId = req.params.id;
    const updateData = req.body;
    console.log("updateStudent:: ",studentId,updateData)
    const student = await updateStudentService(studentId, updateData);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

export const getAllStudents = async (req, res) => {
  try {
   
    const student = await getAllStudentsService();

    res.status(201).json({
      success: true,
      message: "Student List Fetched",
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};