//Array insertion patterns
//insert at begining
const arr1 = [10, 9, 8]
let arrInsertion = arr1.unshift(11)
console.log("Starting ", arr1)

//insert at End
let insertEnd = arr1.push(7)
console.log("Ending", arr1)

// insert number  at middle index
let middleInsert = arr1.splice(2, 0, 3)
console.log("Middle", arr1)

//insert in sorted aaray
arr1[2] = 7
console.log(arr1)

//Add multiple ele in array
arr1.push(6, 5)
console.log(arr1)

// Count unique elements in array
const uniqNumber = [1, 1, 2, 2, 3, 4]

function chkUnique() {
    let unique = new Map()
    for (let i = 0; i < uniqNumber.length; i++) {
        const element = uniqNumber[i];

        if (unique.has(element)) {
            unique.set(element);
        }
    }
    for (const i of unique.keys()) {
        console.log(i)

    }


}
chkUnique()

//chcking missing number

const num1 = [1,2,4,5];

for (let i = 1; i < num1.length; i++) {
    if(!num1.includes(i)){
        console.log("missing numbers",i)
    }
}