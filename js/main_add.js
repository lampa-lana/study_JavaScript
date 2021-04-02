let num = 266219;

let str = String(num);
console.log(str.length);
let num2 = +(str[0]) * +(str[1]) * +(str[2]) * +(str[3]) * +(str[4]) * +(str[5]);
console.log(num2);

console.log(str);


let num3 = num2 ** 3;
console.log(num3);

let str2 = String(num3);
console.log(str2[0] + str2[1]);
console.log(Number(str2[0] + str2[1]));



let arr = str.split('');
console.log(arr);
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];

}console.log(result);