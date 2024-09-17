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

// console.log(student.indexOf("Bdas"))

for(let i=0; i<student.length; i++){
    console.log(`Student ${i+1} : ${student[i]}`)
}

// Prints argument
function print(a){
    console.log(a)
}

// High Order Function
// student.forEach(print)

// similarly
student.forEach((val) => console.log(val))

// map
student.map((val) => console.log(val))


const numbers = [1,2,3,4,5,6]

numbers.forEach((num)=>console.log(num*2)) // forEach don't return anything
let newArray = numbers.map((val) => val*2) // map return a new array
console.log(newArray)
console.log(numbers)

let ans = numbers.find(num => num === 4) // iterates over every array element and matches the condition, if found true then returns the result

console.log(ans)

console.log(numbers.includes(6)) // return true if the argument is present in the array

let newArr = numbers.filter(num => num%2 == 0) // iterates over all the array elements and perform the specified operation, and if the operation for any array element return true then the array element is placed into a new array, existing array and its values is not changed
console.log(newArr) //[2, 3, 4, 5]

newArr = numbers.slice(1, 5) // 1,5 are index of the array, here 1 is included and 5 is excluded
console.log(newArr) //[2, 3, 4, 5]

newArr = numbers.splice(1,4) // here 1 is the starting index and 4 is the number of elements that will be deleted from the array from the n=1 th index, and the removed array elements will be placed into a new array and the remainin array elements will still be present in the existing array
// means, start from 'n' and delete 'm'th next index
console.log(newArr) //[2, 3, 4, 5]