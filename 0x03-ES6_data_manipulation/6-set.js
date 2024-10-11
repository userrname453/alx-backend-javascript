export default function setFromArray(array) {
  const newSet = new Set();
  for (const e of array) {
    newSet.add(e);
  }
  return newSet;
}
