//   1-rasm
// 1
// function son(number) {
//     if (number < 100 || number > 999) {
//         return "Iltimos, 3 xonali son kiriting.";
//     }
//     const reversedNumber = number.toString().split('').reverse().join('');
//     return parseInt(reversedNumber, 10);
// }
// console.log(son(123));
// console.log(son(456));

// 2

// function num(number) {
//     if (number < 0) {
//         return "Iltimos, musbat son kiriting.";
//     }
//     if (number === 0) {
//         return 1;
//     }
//     return number * factorial(number - 1);
// }
// console.log(num(5));
// console.log(num(7));

// 3

// function age(obj1, obj2) {
//  if (obj1.age > obj2.age) {
//         console.log(obj1.name);
//     } else if (obj1.age < obj2.age) {
//         console.log(obj2.name);
//     } else {
//         console.log("Yoshlari teng.");
//     }
// }
// const person1 = {
//     name: "Ali",
//     age: 25
// };
// const person2 = {
//     name: "Vali",
//     age: 30
// };
// age(person1, person2);
// age({ name: "Sara", age: 28 }, { name: "Nina", age: 28 });

// 4

// function son(n) {
//     if (n < 1) {
//         return;
//     }
//     son(n - 1);

//     console.log(n);
// }
// son(5);
// son(10);

// 5

// let user = {name: "Shaxzod"};
// let age = {age: 25};
// let usejob = {job: "Developer"};
// let userInfo = {...user, ...age, ...usejob};
// console.log(userInfo);

// 6

// function sum(salaries) {
//     let totalSalary = 0;
//     for (let salary of Object.values(salaries)) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

// let salaries = {
//     "a xodim": 150,
//     "b xodim": 180,
//     "c xodim": 210
// };

// console.log(sum(salaries));

// 7

// const numbers = [10, 5, 20, 15, 30, 25];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// 8

// let arr = [2, 4, 6, 7, true, false, null, undefined];
// let sum = 0;
// for (let value of arr) {
//     if (value === undefined) {
//         sum += 0;
//     } else if (typeof value === "number") {
//         sum += value;
//     } else if (value === true) {
//         sum += 1;
//     } else if (value === false) {
//         sum += 0;
//     } else if (value === null) {
//         sum += 0;
//     }
// }
// console.log(sum);

//   2- rasm

// 1

// let arr = [
//     {
//         name: "Abdulloh",
//         age: 21,
//         status: false,
//     },
//     {
//         name: "Botir",
//         age: 18,
//         status: false,
//     },
//     {
//         name: "Shokir",
//         age: 12,
//         status: false,
//     }
// ];
// arr.forEach(person => {
//     if (person.status === false) {
//         console.log(person);
//     }
// });

// 2

// function Sum() {
//   let input = prompt("Iltimos 1dan 10gacha son kiriting");
//   let number = Number(input);

//   if (isNaN(number) || number < 1 || number > 10) {
//     alert("Iltimos 1dan 10gacha son kiriting");
//     return;
//   }

//   let summa = 0;
//   for (let i = 1; i <= number; i++) {
//     summa += i;
//   }
//   console.log(summa)
// }
// Sum();

// 3

// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [3, 5, 6, 7, 8, 9];
// let commonElements = new Set();
// for (let elem of array1) {
//     if (array2.includes(elem)) {
//         commonElements.add(elem);
//     }
// }
// let commonCount = commonElements.size;
// console.log(`Ikkita arrayda bir xil bo'lgan elementlar soni: ${commonCount}`);

// 4

// let array1 = [1, 2, 3, 4, 5, 10];
// let array2 = [4, 5, 6, 10, 12];
// let commonElements = [];
// for (let elem of array1) {
//     if (array2.includes(elem)) {
//         commonElements.push(elem);
//     }
// }
// if (commonElements.length > 0) {
//     let maxCommonValue = Math.max(...commonElements);
//     console.log(`Ikkita arrayda umumiy eng katta qiymat: ${maxCommonValue}`);
// } else {
//     console.log("Ikkita arrayda umumiy element yo'q.");
// }

// 5

// function son(n) {
//       for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// let inputNumber = 7;
// som(inputNumber);

//    3 - rasm

// 1
// function son() {
//        let size = parseInt(prompt("Array hajmini kiriting: "));
//         let arr = [];
//     for (let i = 0; i < size; i++) {
//         let id = prompt(`ID ${i + 1} ni kiriting: `);
//         let name = prompt(`Name ${i + 1} ni kiriting: `);
//         let obj = {
//             ID: id,
//             Name: name
//         };
//         arr.push(obj);
//     }
//     console.log(arr);
// }
// son();

// 2

// function array(arr) {
//       let num = new Set(arr);
//       return Array.from(num);
// }
// let inputArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// let resultArray = array(inputArray);
// console.log(resultArray);

// 3

// function son() {
//     let arr = [88, 75, 342, 21, 45, 67];
//     let inputNumber = prompt("Array ichida mavjud bo'lgan sonni kiriting: ");
//     inputNumber = parseInt(inputNumber);
//     let index = arr.indexOf(inputNumber);
//     if (index !== -1) {
//         console.log(`Kiritilgan son: ${inputNumber}, uning indexi: ${index}`);
//     } else {
//         console.log("Kiritilgan son array ichida mavjud emas.");
//     }
// }
// son();

// 4

// function array() {
//      let arr = [88, 75, 342, 21, 45, 67];
//     let inputNumber = prompt("Arraydan o'chiriladigan sonni kiriting: ");
//     inputNumber = parseInt(inputNumber);
//     let updatedArray = arr.filter(num => num !== inputNumber);
//     console.log("Qolgan elementlar:", updatedArray);
// }
// array();

// 5
// function maxSum(arr) {
//     let maxSum = 0;
//     let pair = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let currentSum = arr[i] + arr[j];
//             if (currentSum > maxSum) {
//                 maxSum = currentSum;
//                 pair = [arr[i], arr[j]];
//             }
//         }
//     }
//     console.log(`Eng katta yig'indiga ega bo'lgan juftlik: [${pair[0]}, ${pair[1]}]`);
//     console.log(`Ularning yig'indisi: ${maxSum}`);
// }
// let inputArray = [1, 2, 3, 4, 5];
// maxSum(inputArray);
