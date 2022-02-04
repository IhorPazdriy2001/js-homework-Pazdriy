// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let x = +prompt('Enter first number: ');
// let y = +prompt('Enter second number: ');
//
// if (x > y) {
//     document.write(x);
// }else{
//     document.write('The numbers are equal');
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let FlatNumber = prompt('Enter a flat number: ');
// if (FlatNumber <= 20 && FlatNumber > 0) {
//     document.write('This if the <b>first</b> entrance.')
// } else if (FlatNumber >= 21 && FlatNumber < 49) {
//     document.write('This if the <b>second</b> entrance.')
// } else if (FlatNumber >= 49 && FlatNumber <= 90) {
//     document.write('This if the <b>third</b> entrance.')
// }else{
//     document.write("<h2>Flat is empty</h2>")
// }

// - Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Enter a number: ');
// if (number === 10) {
//     document.write('True');
// } else {
//     document.write('False');
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = false;
//
// if (typeof x === 'number'){
//     document.write('1')
// }else if (typeof x === 'string'){
//     document.write('2')
// }else if (typeof x === 'boolean'){
//     document.write('3')
// }else if (typeof x ==='object'){
//     document.write('4')
// }else{
//     document.write('I dont know what is that')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = prompt('What the temperature today? ');
// if (temp >= 10 && temp<=22) {
//     document.write('We go study');
// } else {
//     document.write('We stay home, and studying online');
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let x = +prompt('Enter a number from 1 to 5');
// switch (x) {
//     case 1:
//         document.write('You won a car');
//         break;
//     case 2:
//         document.write('You won a moto');
//         break;
//     case 3:
//         document.write('You won a phone');
//         break;
//     case 4:
//         document.write('You won a 1000$');
//         break;
//     case 5:
//         document.write('You won a brain, congratulation');
//         break;
// }