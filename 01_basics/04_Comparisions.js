// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//here the equality check is different from the comparators like >,>= so with > or >= the
// null is converted to 0. So the null sometimes get converted into 0 and sometimes into 
// NaN(Not a Number)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (Strict Check,which compares the number and also its data type)

console.log("2" === 2);