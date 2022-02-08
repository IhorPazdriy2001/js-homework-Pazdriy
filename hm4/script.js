// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function SquareRectangle(a, b) {
//     return a*b;
// }
// console.log(SquareRectangle(5,7))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function SquareCircle(){
//     let Pi= 3.14;
//     let R= 4;
//     return  Pi * Math.pow(4,2)
// }
// console.log(SquareCircle())

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r // S=2*pi*r(h+r)
// function SquareCylinder(){
//     let Pi = 3.14;
//     let r = 7;
//     let h = 25;
//
//     return 2*Pi*r*(h+r)
// }
// console.log(SquareCylinder())

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r // S=2*pi*r(h+r)
// function SquareCylinder(h,r){
//     let Pi = 3.14;
//     return 2*Pi*r*(h+r)
// }
// console.log(SquareCylinder(25,7))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr1 = ["name", "surname", "LastName"];
// let arr2 = [7,9,56];
// function TakeArray(arr){
//     for (let arrElement of arr) {
//         document.write(`<p>${arrElement}</p>`)
//         console.log(arrElement)
//     }
// }
// TakeArray(arr1)
// TakeArray(arr2)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function ParagraphCreator(a){
//     document.write(`<p>${a}</p>`)
// }
//
// ParagraphCreator('this is first paragraph')
// ParagraphCreator('this is second paragraph')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function Li_in_Ul_Creator(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`)
// }
//
// Li_in_Ul_Creator("Arbitrary text")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function Ul_li_Creator(text,counter) {
//     for (let i = 0; i < counter; i++) {
//         document.write(`<ul><hr>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// <hr></ul>`)
//
//     }
// }
//
// Ul_li_Creator("text",7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr1 = [1, "string", true]
// function TakeArray(arr) {
//     // for (let i = 0; i < arr.length; i++) {
//     //     let elements = arr[i];
//     //     console.log(elements)
//     // }
//     for (const arrElement of arr) {
//         console.log(arrElement)
//         document.write(`<li>${arrElement}</li>`)
//     }
// }
// TakeArray(arr1)

// - створити функцію яка приймає масив об'єктів
// з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let ArrayOfObjects = [
//     {id: 1234, name: "Stepan", age: 43},
//     {id: 244, name: "Jack", age: 18},
//     {id: 78, name: "Petro", age: 25},
//     {id: 44, name: "Katya", age: 98},
//     {id: 5, name: "Ola", age: 1}
// ]
// function ShowArray(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         document.write(`<div>id: ${arrElement.id} name: ${arrElement.name} age: ${arrElement.age}</div>`)
//         console.log(arrElement)
//
//     }
//
// }
// ShowArray(ArrayOfObjects)