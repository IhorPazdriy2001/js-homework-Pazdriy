// // -- отримує текст з параграфа з id "content"
// let taketxtfrom_p_inContent = document.getElementById('content')
// console.log(taketxtfrom_p_inContent.innerText);
//
//
// // -- отримує текст з блоку з id "rules"
// // let taketxt_div_id = document.querySelector('#rules').innerHTML
// // console.log(taketxt_div_id);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// let replace_txt_p_idContent = document.querySelector('#content')
// console.log(replace_txt_p_idContent.textContent = '1123124124');
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let replace_txt_p_IDrules = document.querySelector('#rules')
// console.log(replace_txt_p_IDrules.textContent = '4214213211');
//
// // -- змініть кожному елементу колір фону на червоний
// // document.body.style.background = 'red'
// taketxtfrom_p_inContent.style.background = 'red'
// replace_txt_p_IDrules.style.background = 'red'
// // -- змініть кожному елементу колір тексту на синій
// taketxtfrom_p_inContent.style.color = 'blue'
// replace_txt_p_IDrules.style.color = 'blue'
//
// let ul = document.getElementsByTagName('ul')
// for (const ulElement of ul) {
//     ulElement.style.background = 'red'
//     // -- змініть кожному елементу колір тексту на синій
//     ulElement.style.color = 'blue'
// }
//
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let elem = document.getElementById('rules')
// console.log(elem.classList);
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let change_All_color_text_fc_rulles = document.getElementsByClassName('fc_rules')
// for (const item of change_All_color_text_fc_rulles) {
//     item.style.color = 'red'
// }