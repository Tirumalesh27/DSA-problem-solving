//Repetative elements
const arr = [1, 1, 2, 3, 3, 4, 5, 6]
function repetativeNumbers(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const elements = arr[i];
        if (map.has(elements)) {
            map.set(elements, map.get(elements) + 1)
        }
        else {
            map.set(elements, 1)
        }
    }
    let finalArray = [];
    for (const [key, value] of map) {
        if (value > 1) {
            finalArray.push(key)
        }

    }
    return console.log(finalArray)

}
repetativeNumbers(arr)

//non repetative numbers
const arr = [1, 1, 2, 3, 3, 4, 5, 6]
function repetativeNumbers(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const elements = arr[i];
        if (map.has(elements)) {
            map.set(elements, map.get(elements) + 1)
        }
        else {
            map.set(elements, 1)
        }
    }
    let finalArray = [];
    for (const [key, value] of map) {
        if (value === 1) {
            finalArray.push(key)
        }

    }
    return console.log(finalArray)

}
repetativeNumbers(arr)