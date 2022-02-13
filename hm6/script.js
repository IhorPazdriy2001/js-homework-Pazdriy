// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let hw = 'hello world'
// console.log(hw.length);
//
// let lorem = 'lorem ipsum.'
// console.log(lorem.length);
//
// let js = 'javascript is cool'
// console.log(js.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// console.log(hw.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let HW = 'HELLO WORLD'
// let LOREM = 'LOREM IPSUM'
// let JS = 'JAVASCRIPT IS COOL'
// console.log(HW.toLowerCase());
// console.log(LOREM.toLowerCase());
// console.log(JS.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let Dirty = ' dirty string '
// console.log(Dirty.length);
// console.log(Dirty.replaceAll(' ', '',));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (string) =>{
//    let arr = string.split(' ')
//   return arr
// }
//
// console.log(stringToArray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let string = 'Каждый охотник желает знать';
// let delete_characters = (str, length) =>{
//    let result = str.substring(0, length)
//     return result
// }
// console.log(delete_characters(string, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//
// let string = "HTML JavaScript PHP";
//
// let insert_dash = (str) => {
//     return str.replaceAll(" ", "-")
//
// }
// console.log(insert_dash(string).toUpperCase());

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let hw = 'hello world'
//
// let fistIndexToUp_case = (str) =>{
//     return str.charAt(0).toUpperCase()+str.slice(1)
// }
// console.log(fistIndexToUp_case(hw));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let hw = 'hello world'
//
// let capitalize = (str) =>{
//     return str.split(' ').map(newarr=>newarr.charAt(0).toUpperCase()+newarr.slice(1)).join()
// }
// console.log(capitalize(hw));