const cleanSet = (set, startString) => {
  if (!startString) return '';
  const arr = Array.from(set);
  const filtered = arr.filter((e) => e.startsWith(startString));
  const mapped = filtered.map((e) => e.slice(startString.length));
  return mapped.join('-');
};

export default cleanSet;
