// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt('Which minute on clock? ');
//
// if (time <= 15) {
//     document.write('first half');
// } else if (time <= 30) {
//     document.write('second half');
// } else if (time > 30 && time < 45) {
//     document.write('third half');
// } else if (time >= 45 && time < 59) {
//     document.write('fourth half')
// }

//  У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//   у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('What day is it today? ');
//
// if (day <= 10) {
//     document.write('The first decade of month')
// } else if (day > 10 && day <= 20) {
//     document.write('The second decade of month')
// } else if (day > 20 && day <= 31) {
//     document.write('The third decade of month')
// } else {
//     document.write('Sorry bro but the month have only 31 days(((')
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

 // let test = true;
 // if (!!test){
 //    document.write('its True ')
 // }else {
 //     document.write('False')
 // }
// let x= true;
// let test2 = !!!x ? 'true' : 'false';
//  document.write(test2)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = -3;
// if (a !== 0){
//     document.write('correct')
// }else {
//     document.write('incorrect')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день.
// let day = prompt('What day is it today? ')
//
// switch (day) {
//
//     case 'Monday':
//         document.write('Math,English');
//         break;
//
//     case 'Tuesday':
//         document.write('literature,swimming')
//         break;
//
//     case 'Wednesday':
//         document.write('programing, playing PC')
//         break;
//
//     case 'Thursday':
//         document.write('go for a walk, dancing')
//         break;
//
//     case 'Friday':
//         document.write('okten, drinking')
//         break;
//
//     case 'Saturday':
//         document.write('try to survive')
//         break;
//
//     case 'Sunday':
//         document.write('sleep and wait for another Friday')
//         break
//     default:
//         document.write('blablabla')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt('Enter the year:')
// if (year % 4 === 0){
//     document.write('Leap year')
// }else{
//     document.write('Not a leap year')
// }

//-Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let imput = prompt('What the official name of JavaScript');
// let x = "ECMAScript";
// if (imput === x){
//     document.write('correct')
// }else{
//     alert("Don't know? ECMAScript!")
// }