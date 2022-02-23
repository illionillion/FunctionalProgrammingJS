//例1
const arr = [11,22,33,44,55];

const obj = arr.reduce((acc,value,index)=>{
    acc[`number${index}`]=value;
    return acc;

},{})
console.log(obj);

//例2
const initialValue = 0 ;
const array = [{x:0},{x:1},{x:2},{x:4},{x:5},{x:7}];

const sample01 = array.reduce((accumulator,currentValue) => {
    return accumulator + currentValue.x
},initialValue);
console.log(initialValue);
console.log(sample01);