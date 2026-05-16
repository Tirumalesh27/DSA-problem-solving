//FIND SMALLEST NUMBER
const arr = [4, 2, 7, 1, 9];
// smallest number
let minivalue = arr[0];
function smallestValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minivalue) {
            minivalue = arr[i]
        }
    }
    return minivalue
}
console.log("SmallestValue", smallestValue(arr))

//Find largest number
let Largest = arr[0];
function LargestValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Largest) {
            Largest = arr[i]
        }
    }
    return Largest
}
console.log("Largestvalue", LargestValue(arr))
// Count Even and Odd values
//pseudo code
//assign a  number and even, odd  = 0 use for loop and if else conditions 
// if it is even value then increment or else odd value increment odd  value
const value = [1, 2, 3, 4, 5, 6];
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {
        evenNumbers++;
    } else {
        oddNumbers++;
    }
}
console.log("EvenCount", evenNumbers);
console.log("OddCount", oddNumbers)

// chk sum of positive and negative
// //pseudo code
// // first Assign input value
// // wrtite a function   in that apply if else condition 
//  if given number  is greater than 0  print positive number
// or if given number is negative value  print negative number
//  if given value is zero print zero

const Numbers = [1, -2, 3, -4, 5]
let positiveSum = 0
let NegativeSum = 0
function checkAllValue() {
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] > 0) {
            positiveSum = positiveSum + Numbers[i];
        }
        else if (Numbers[i] < 0) {
            NegativeSum = NegativeSum + Numbers[i];

        }

    }
    console.log("PositiveSum", positiveSum);
    console.log("NegativeSum", NegativeSum)
}
checkAllValue()

const Nums = [8, 3, 5, 1, 9]
function findingSecondSmallest() {
    let smallNumber = Infinity;
    let secondSmallNumber = Infinity;
    for (let i = 0; i < Nums.length; i++) {
        if (Nums[i] < smallNumber) {
            secondSmallNumber = smallNumber
            smallNumber = Nums[i];
        } else if (Nums[i] < secondSmallNumber && Nums[i] !== smallNumber) {
            secondSmallNumber = Nums[i]
        }
    }
    console.log(smallNumber)
    console.log(secondSmallNumber)
}
findingSecondSmallest()

//  Diffrence b/w largest and smallest

const array = [12, 4, 19, 7]
let largest = array[0]
let smallest = array[0]
function findingDiffrence() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
        else if (array[i] < smallest) {
            smallest = array[i]
        }
    }
    return largest - smallest
}
let result = findingDiffrence(array)
console.log("result", result)

// Find all elements greater than  the Avg


const input = [2, 4, 6, 8, 10]

function findingAvg() {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i]
    }
    let average = sum / input.length
    for (let i = 0; i < input.length; i++) {
        if (input[i] > average) {
            console.log("average ", input[i])

        }
    }

}

findingAvg()
