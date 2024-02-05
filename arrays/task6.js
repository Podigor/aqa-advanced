const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]

const copiedAndSortedArray = structuredClone(numbersList).sort((a, b) => a - b)

console.log("Original array", numbersList)
console.log("Copied and sorted in ascending order array", copiedAndSortedArray)


