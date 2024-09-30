export default function createIteratorObject(report) {
  // eslint-disable-next-line func-names
  return (function* () {
    for (const department of Object.values(report.allEmployees)) {
      console.log('debuggg', department);
      yield* department; // Use yield* to yield all employees in the department
    }
  }());
}
