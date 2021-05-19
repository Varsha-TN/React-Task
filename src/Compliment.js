// let arr1 = [1,4,8];
// let arr2 = [2,4,10,12];

// let arr1 = ['b','c'];
// let arr2 = ['b', 'a', 'n', 'g','l','o','r','e'];

let arr1 = ['B','C'];
let arr2 = ['B','A','N','G','A','L','O','R','E'];

let complimentA = arr1.filter(x => !arr2.includes(x));
console.log(complimentA.toString());


let complimentB = arr2.filter(x => !arr1.includes(x));
console.log(complimentB.toString());