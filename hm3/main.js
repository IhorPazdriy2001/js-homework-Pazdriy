// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [[10, 20, 30, 40, 50], ['one', 'two', 'three', 'four', 'five'], ['nubmer', true, false, 25, 10]];
//     for (let x of arr){
//         console.log(x)
//     }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// for (let i = 1; i < 16; i++) {
//      arr.push(i)
// }
// console.log(arr)

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// document.write("<div>")
//
// for (let i = 0; i < 10; i++) {
//
//    document.write(`<div>number ${i}</div>`)
// }
//
// document.write("<div>")

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// document.write("<div>")
//
// for (let i = 0; i < 11; i++) {
//
//         document.write(`<div>number ${i}</div>`)
//
// }
//
// document.write("<div>")

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 0; i < 20; i++) {
//     document.write(`<h1>${i} Hello</h1>`)
//
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [8, 5, 2, 0, 200, 1002, 45, 763, 3, 415]
// for (let number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['str', 'string', 'scam', 'bnb', 'btc', 'forest', 'dbdl' , 'okten', 'lol', 'geek']
// for (let string of arr) {
//     console.log(string)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [20, 500 , 'str', true , false, 'type', 65, 'killer', 'big cheese', '100500 question on lesson))))']
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     document.write(`<div>${arrElement}</div>`)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [20, 500 , 'str', true , false, 'type', 65, 'killer', 'big cheese', '100500 question on lesson))))']
// for (let i=0; i<arr.length;i++){
//     let arrElement = arr[i];
//
//     if (typeof arrElement === 'boolean'){
//         document.write(`<h3>${arrElement}</h3>`)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [20, 500, 'str', true, false, 'type', 65, 'killer', 'big cheese', '100500 question on lesson))))']
// for (let i = 0; i < arr.length; i++){
//     let result = arr[i];
//     if(typeof result === 'number'){
//         document.write(`<div>${result}</div>`)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [20, 500, 'str', true, false, 'type', 65, 'killer', 'big cheese', '100500 question on lesson))))']
// for (i = 0; i < arr.length; i++) {
//     let x = arr[i]
//     if (typeof x === 'string'){
//         document.write(`<p>${x}</p>`)
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
//до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = true;
// array[1] = 1;
// array[2] = 'hello';
// array[3] = 'good';
// array[4] = 15;
// array[5] = false;
// array[6] = 'day';
// array[7] = 67;
// array[8] = 9787;
// array[9] = -45;
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) console.log(i)

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 1; i <= 100; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i=i+2) {
//
//     console.log(i);
//     document.write(`<p>${i}</p>`)
//
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for (let i = 1; i <= 100; i++) {
//     let result = i
//     if(result % 2 === 0){
//         console.log(result)
//         document.write(`<div>${result}</div>`)
//     }
//
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     let result = i
//     if (result % 2) {
//         console.log(result)
//         document.write(`<div>${result}</div>`)
//     }
// }