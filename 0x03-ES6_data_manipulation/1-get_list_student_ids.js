const getListStudentIds = (array) => {
  if (!Array.isArray(array)) return [];
  const arr = [...array];
  return arr.map((student) => student.id);
};

export default getListStudentIds;
