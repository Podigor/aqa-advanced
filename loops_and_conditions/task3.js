const number = 5;

console.log("Multiplication table using 'for' loop:")
for (let i = 1; i <= 10; i++) {
     console.log(`${number} x ${i} = ${number * i}`)
}

console.log("Multiplication table using 'while' loop:")
let index = 1
while (index <= 10) {
    console.log(`${number} x ${index} = ${number * index}`)
    index++
}
