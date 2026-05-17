// SWAP an array
const arr = [5, 4, 3, 2, 1]
function reverseAnArray() {
    let firstIndex = 0
    let lastIndex = arr.length - 1;

    while (firstIndex < lastIndex) {
        let swapping = arr[firstIndex];

        arr[firstIndex] = arr[lastIndex];
        arr[lastIndex] = swapping;
        firstIndex++;
        lastIndex--;
    }
    console.log(arr)
}
reverseAnArray();

//Plaindrome Number
const input = 121;
let firstDigit = Math.floor(input / 100);
let lastDigit = input % 10;
if (firstDigit === lastDigit) {
    console.log("Given number is Palindrome number")
}
else {
    console.log("Not a  Palindrome number ")
}

//Duplicate Numbers
const nums = [1, 2, 2, 5, 5, 6,6,7,7,8]
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
            console.log(nums[i])
            break

        }
    }
}

//Count Frequncy of values
const Nums = [5, 8, 9, 5, 6, 6, 8]
function frequncyChk() {
    //create map or store the array
    let map = new Map();
    for (let i = 0; i < Nums.length; i++) {
        const element = Nums[i];
        //chk values if exists
        if (map.has(element)) {
            //values ni get chesthunnam 
            let freq = map.get(element)
            //set the values
            map.set(element, freq + 1)
        }
        else {
            map.set(element,  1)
        }
    }
    return console.log(map)
}
frequncyChk()
