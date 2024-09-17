// Arrays

const student = ['Sdas', 'Rdas', 'Bdas']
// the student array is of const type, so we can not change the student variable, but we can change its values.
// means, the student variable will stay as array, we can not do like student = 50,
// but we can push or pop values from the students array

student.push("Mdas")
// student.pop()
console.log(student)

// Arrays are non Homogeneous, so it is heterogeneous
// means we can store num, string, objects anything inside on array

console.log(student.indexOf("Bdas"))