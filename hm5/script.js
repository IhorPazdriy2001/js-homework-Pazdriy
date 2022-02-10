// створити функцію яка обчислює та повертає площу прямокутника
// let Srectangle = (a,b) => a*b;
// console.log(Srectangle(4,5))

// - створити функцію яка обчислює та повертає площу кола
// let Scircle = (r) => 3.14 * Math.pow(r,2);
// console.log(Scircle(3))

// - створити функцію яка обчислює та повертає площу циліндру
// let Scylinder = (radius, height) => Math.round((2 * 3.14 * radius * (height + radius)))
// console.log(Scylinder(2,5))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [6,8,1,3,7]
//
// let ShowArray = (arr) =>{for(let elemets of arr){console.log(elemets)}}
//
// ShowArray(array)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let Ul_Li_Creator= (textli) =>{
//     document.write(`<ul>
//
//      <li>${textli}</li>
//      <li>${textli}</li>
//      <li>${textli}</li>
//
//
//      </ul>`)
// }
// Ul_Li_Creator(`hello`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let Amount_Ul_li_Creator = (litext, amount_li) => {
//     for (let i=0;i<amount_li;i++){
//     document.write(`<div>
//         <li>${litext}</li>
//     </div>`)
//     }
// }
// Amount_Ul_li_Creator("hello",7)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ["if","octen","will","start","at", 8, "pm", "write",true,1,"else","false",0]
// let TakeArr = (arr) =>{
//     for (let arrElement of arr) {
//         document.write(`<ul><li>${arrElement}</li></ul>`)
//     }
// }
// TakeArr(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let animals = [
//     { name: 'Vasya', id: 'Cat', age: 4},
//     { name: 'Murka', id: 'Cat', age: 1.5 },
//     { name: 'Varna', id: 'Turtle', age: 21 },
//     { name: 'Kesha', id: 'Parrot', age: 3 },
//     { name: 'Nayda', id: 'Dog', age: 2.5 },
//     { name: 'Pufic', id: 'Humster', age: 2.5 },
//     { name: 'Randy', id: 'dog', age: 12 },
// ];
// let GetArr = (arr) =>{
//     for (let elementsArray of arr){
//         document.write(`<div> The name is - ${elementsArray.name}. ID - ${elementsArray.id}. Age - ${elementsArray.age}</div>`)
//     }
// }
// GetArr(animals)
