// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a,b,c) =>{
//   if (a<b && a<c){
//       console.log(a)
//   }else if (b<a && b<c){
//       console.log(b)
//   }else {
//       console.log(c)
//   }
// }
// minNumber(1,12,32)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a,b,c) =>{
//     if (a>b && a>c){
//         console.log(a)
//     }else if (b>a && b>c){
//         console.log(b)
//     }else {
//         console.log(c)
//     }
// }
// maxNumber(44,777 ,40)

// - створити функцію яка повертає найбільше число з масиву
//
// let array = [7,2,1]
// let maxNumberInArray = (arr) =>{
//    let max = arr[0]
//     for (let arrElement of arr) {
//         if (arrElement>arr){
//            max = arr
//         }
//     }
//     return max
// }
// console.log(maxNumberInArray(array))

// - створити функцію яка повертає найменьше число з масиву
// let array = [33, 258, 677, 77]
// let emptyArr = []
// let randomNumberArr = (eArr) => {
//     for (let i = 0; i < 3; i++) {
//         let random = (Math.round(Math.random() * 100))
//         let result = eArr.push(random)
//
//     }
//     return eArr
// }
//
//
//
// let minArrElement = (arr) => {
//     let min = arr[0]
//     for (let element of arr) {
//         if (element < min) {
//             min = element
//         }
//     }
//     return min
// }
// console.log(minArrElement(array))
// emptyArr = randomNumberArr(emptyArr);
// console.log(emptyArr)
// console.log(minArrElement(emptyArr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let array = [1,2,3,4]
//
// let SumArr = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         sum += arrElement
//
//     }
//     return sum
// }
// console.log(SumArr(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [5, 10, 15]
//
// let ArithmeticMeanArr = (arr) => {
//    let  sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         let Elements = arr[i]
//         sum += Elements/2
//     }
//     return sum
// }
// console.log(ArithmeticMeanArr(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// let TakeNumber =(num1, num2, num3) => {
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
// TakeNumber(10,25,83)
// document.write(`<div>${TakeNumber(1,15,33)}</div>`)

// - створити функцію яка заповнює масив рандомними числами
// let EmptyArr = []
// let RandomArr = (arr) => {
//     for (i = 0; i < 7; i++) {
//         let random = Math.round(Math.random() * 10000)
//         let result = arr.push(random)
//     }
//     return arr
// }
// console.log(RandomArr(EmptyArr))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = []
//
// let PushArray = (arr, limits) => {
//     for (let i = 0; i < 8; i++) {
//         let random = Math.floor(Math.random()*limits)
//         let result = arr.push(random)
//
//     }
//    return arr
// }
// console.log(PushArray(array,500))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3]
//
// let rArr = (array) =>{
//    let ReverseArray = []
//     for (let i=0,ReverseIndex=arr.length-1;i<arr.length;i++,ReverseIndex--){
//         ReverseArray[ReverseIndex] = arr[i]
//     }
//     return ReverseArray
// }
// console.log(rArr(arr))


