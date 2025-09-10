//task1
const array1 = Array(7)
console.log(array1)
const array2 = Array(7).fill("Hello")
console.log('final Array: ', array2) 

//task2 
const array3 = Array(3)
console.log(array3)
const array4 = Array(3).fill("froggy")
console.log('final array: ', array4)

//task3 
const students = Array(5) 
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]}'s id is ${i * 10}`)
}