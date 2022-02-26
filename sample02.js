const reverse = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[(arr.length-1)-i])
    }

    return result
}

const reverse2 = ([x,...rest]) => x === undefined ? [] : [...reverse2(rest),x]

console.log(reverse([1,2,3,4,5]))
console.log(reverse2([1,2,3,4,5])) 