// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 1 < 2 < 3
// function SmallerNumber(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// SmallerNumber(7,3,20)
//
// function TheLargestNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }
// }
// document.write(TheLargestNumber(7, 9, 53))

// - створити функцію яка повертає найбільше число з масиву
// debugger;
// let x = [5, 9, 588]
// function MaxNumberOfArray(arr) {
//     let lNum = arr[0]
//     for (let arrElement of arr) {
//         if (arrElement > lNum) {
//             lNum = arrElement
//         }
//     }
//     return lNum
// }
// console.log(MaxNumberOfArray(x))

// - створити функцію яка повертає найменьше число з масиву
// let array = [456, 3, 543, 777, 57]
//
// function minNumber(arr) {
//     let min = arr[0]
//     for (let elements of arr) {
//         if (elements < min) {
//             min = elements
//         }
//     }
//     return min
// }
// console.log(minNumber(array))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let array = [10,20,30,40]
// // debugger;
// function ArrCounter(arr){
//     let sum = 0;
//     for (let i=0;i<arr.length;i++){
//         let elementsArr = arr[i];
//         sum=sum+elementsArr
//     }
//     console.log(sum)
// }
// ArrCounter(array)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [10,20,30,40]
//
// function ArrayMean(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         sum = sum + arrElement/2;
//     }
//     console.log(sum)
// }
// ArrayMean(array)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// Тут напевно мені не обовязково було створювати два цикла а просто в все в одному console.log, return
// function TheLargestNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2)
//     } else {
//         console.log(num3)
//     }
//
//     if (num1<num2 && num1 <num3){
//         return num1;
//     }else if (num2<num1 && num2<num3){
//         return num2;
//     }else {
//         return num3
//     }
// }
// TheLargestNumber(6,8,3)
// document.write(`<div>${TheLargestNumber(4,7,2)}</div>`)

// - створити функцію яка заповнює масив рандомними числами
// let array1 = []
// let array2 = []
// let array3 = []
//
// function ArrayRandomNumbers(arr) {
//     for (let i = 0; i < 2; i++) {
//         let random = Math.round(Math.random() * 100)
//         let result = arr.push(random)
//     }
//     return arr
// }
// console.log(ArrayRandomNumbers(array1))
// console.log(ArrayRandomNumbers(array2))
// console.log(ArrayRandomNumbers(array3))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr1 = []
// let arr2 = []
// let arr3 = []
//
// function ArrRandom(arr,limit) {
//     for (let i = 0; i < 3; i++) {
//        let random= Math.floor(Math.random()*limit)
//         let result = arr.push(random)
//     }
//     return arr
// }
// console.log(ArrRandom(arr1,1000))
// console.log(ArrRandom(arr2,10000))
// console.log(ArrRandom(arr3,100000))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// function ReverseArr(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }
// ReverseArr(arr1)