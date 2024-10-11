const updateStudentGradeByCity = (students, city, newGrades) => {
  const arr = students.filter((student) => student.location === city);
  return arr.map((student) => {
    const newStudent = { ...student };
    newStudent.grade = 'N/A';

    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    }

    return newStudent;
  });
};
export default updateStudentGradeByCity;
