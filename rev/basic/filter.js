const students = [
  { name: "Alice", scores: [88, 92, 79, 85] },
  { name: "Bob", scores: [70, 40, 55, 68] },
  { name: "Charlie", scores: [100, 90, 95, 80] },
  { name: "David", scores: [50, 45, 60, 75] },
];

const filterStudents = (std) => {
  return std.filter((stdunt) => stdunt.scores.every((sc) => sc >= 60));
};

console.log(filterStudents(students));
