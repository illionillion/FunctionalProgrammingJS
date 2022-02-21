const sum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

const sum2 = (arr) => (arr.length === 0 ? 0 : arr[0] + sum2(arr.slice(1)))
const sum3 = ([x, ...rest]) => (x === undefined ? 0 : x + sum3(rest))

console.log(sum([1,2,3,4]));
console.log(sum2([1,2,3,4]));
console.log(sum3([1,2,3,4,5]));