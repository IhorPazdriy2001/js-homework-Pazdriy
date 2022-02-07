// 1. перебрати його циклом while
//
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     document.write(`<div>${arr[i]}</div>`)
//     i++
// }

// 2. перебрати його циклом for
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     document.write(`<p>${arrElement}</p>`)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0
// while (i<arr.length){
//
//     if (i % 2 === 0 ){
//        console.log(arr[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         document.write(`<div>${arr[i]}</div>`)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//         document.write(`<div>${arr[i]}</div`)
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     const arrayElement = arr[i];
//     if (i % 2) {
//         document.write(`<div>${arr[i]}</div>`)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//
//    if (i % 3 === 0) {
//        document.write(`<div>${"okten"} ${[i]}</div>`)
//    }
// }

// 8. вивести масив в зворотньому порядку.
//
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// // document.write(arr.reverse()) як жаль((((((((((((((((
// for (let i = arr.length-1; i>0; i--){
//     console.log(arr[i])
// }

// 9. перебрати його циклом while зворотом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while(i>0){
//     console.log(arr[i])
//     i--
// }

//10.перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while(i>0){
//     if(i%2){
//         console.log(i)
//     }
//     i--
// }

// 11.перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i > 0; i--) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 12.замінити кожне число кратне 3 на слово "okten"
//          //0  /1  /2 /3  /4  /5 /6   /7  /8   /9
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i > 0; i--) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }

