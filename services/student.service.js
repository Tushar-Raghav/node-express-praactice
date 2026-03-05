import Student from "../models/student.model.js";

export const createStudentService = async (studentData) => {
  const student = new Student(studentData);
  const savedStudent = await student.save();
  return savedStudent;
};

export const updateStudentService = async (studentId, updateData) => {

  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    updateData,
    { new: true } // returns updated document
  );

  return updatedStudent;
};

export const getAllStudentsService = async () => {
  const allStudents = await Student.find();
  //  await Student.deleteOne({_id:id});
  //  await Student.deleteMany({});
  //  await Student.find({_id:id});
  //  await Student.find({email:email});
  //  await Student.find({name:name});
  return allStudents;
};