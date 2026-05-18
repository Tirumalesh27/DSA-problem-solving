//Sum pattern
const sumArray = [1, 2, 3, 4, 5]
function Sum() {
    let add = 0;
    for (let i = 0; i < sumArray.length; i++) {
        add = add + sumArray[i]
    }
    console.log("sum:", add)
}
Sum()

//product of an array
function product() {
    let result = 1;
    for (let i = 0; i < sumArray.length; i++) {
        result = result * sumArray[i]
    }
    console.log("Product:", result)
}
product()

//Sum of even numbers
function evenSum() {
    let even = 0;
    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i] % 2 === 0) {
            even = even + sumArray[i]
        }
    }
    console.log("evenSum:", even)
}
evenSum()

//sum of odd numbers
function oddSum() {
    let odd = 0;
    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i] % 2 === 1) {
            odd = odd + sumArray[i]
        }
    }
    console.log("oddSum:", odd)
}
oddSum()

//Difference b/w even and odd
function difference() {
    let even = 0
    let odd = 0;
    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i] % 2 === 0) {
            even = even + sumArray[i]
        }
        else if (sumArray[i] % 2 === 1) {
            odd = odd + sumArray[i]
        }
    }
    let output = even - odd
    console.log("diffrence:", output)
    return output
}
difference()

//Percentage of  a given array
const percentageArray = [80, 90, 70]
let sum = 0
for (let i = 0; i < percentageArray.length; i++) {
    sum = sum + percentageArray[i]
}

let total = (percentageArray.length) * 100;
let percentage = (sum / total) * 100;
console.log("sum", sum)
console.log("percentage", percentage)


//Running sum
function runningSum() {
    let output = []
    let add = 0;
    for (let i = 0; i < sumArray.length; i++) {
        add = add + sumArray[i]
        output[i] = add
    }
    console.log("Running sum:", output)
    return output

}
runningSum()
//Avg sum
const array = [1, 2, 3, 4, 5]
function avgSum() {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    console.log(sum)
    let avg = sum / array.length;
    console.log(avg)


}
avgSum()

//avg of even numbers
const arr = [10, 9, 9, , 9, 30]
let even = 0
let count = 0
function avgEven() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even = even + arr[i]
            count++
        }
    }
    let average = even / count;
    console.log(average)
}
avgEven()
// avg of odd numbers
let odd = 0
function avgOdd() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd = odd + arr[i]
            count++
        }
    }
    let average = odd / count;
    console.log(average)
}
avgOdd()



