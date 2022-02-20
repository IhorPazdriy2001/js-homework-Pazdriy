// // a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById('main_header')
// // console.log(addClass);
// addClass.style.textAlign = 'center'
// addClass.classList.add('group')
// // b) робить шириниу елементу ul 400px
// let ulWidth = document.getElementsByTagName('ul')
// for (const ulWidthElement of ulWidth) {
//     ulWidthElement.style.border = '3px solid red'
//     ulWidthElement.style.width = '400px'
// }
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let w50_linkList = document.getElementsByClassName('linkList')
// for (const w50LinkListElement of w50_linkList) {
//     w50LinkListElement.style.border = '2px solid green'
//     w50LinkListElement.style.borderRadius = '3px'
//     w50LinkListElement.style.width = "50%"
//     w50LinkListElement.style.margin = '5px'
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// let txt_listElement2 = document.getElementsByClassName('listElement2')
// console.log(txt_listElement2)
// console.log(txt_listElement2[0].innerHTML);
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let bg_li_silver = document.getElementsByTagName('li')
// for (const bgLiSilverElement of bg_li_silver) {
//     bgLiSilverElement.style.background = 'silver'
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let add_classAnchor_to_Allelements_a = document.getElementsByTagName('a')
// for (const addClassAnchorToAllelementsAElement of add_classAnchor_to_Allelements_a) {
//       addClassAnchorToAllelementsAElement.classList.add('anchor')
//     // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     //     змінює йому розмір тексту на 40 пікселів
//     if (addClassAnchorToAllelementsAElement.innerText === 'link3'){
//         addClassAnchorToAllelementsAElement.style.fontSize = '40px'
//
//
//
//     }
//     // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     let newtxt = addClassAnchorToAllelementsAElement.innerText
//     addClassAnchorToAllelementsAElement.classList.add(`${newtxt}`)
// }
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // let sub_header_bg = document.getElementsByClassName('sub-header')
// // for (const subHeaderBgElement of sub_header_bg) {
// //     // console.log(subHeaderBgElement)
// //     let bg = prompt('write a bg color')
// //     subHeaderBgElement.style.background = `${bg}`
// //
// // }
// //
// // // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
// // // текст елемнту = content 2 segment . Колір отримати з prompt()
// //
// // let sub_header_change_txt = document.getElementsByClassName('sub-header')
// // for (const subHeaderTxt of sub_header_change_txt) {
// //     let ctxt = prompt('Enter txt color')
// //     if(subHeaderTxt.innerText === 'content 2 segment'){
// //         subHeaderTxt.style.color = `${ctxt}`
// //     }
// // }
//
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// // let change_txt_content_1 = document.getElementsByClassName('content_1')
// // console.log(change_txt_content_1);
// // change_txt_content_1[0].innerText=prompt('new text')
//
// // l) отримати елементи p та змінити їм padding на 20px
// let p_padding_20px = document.getElementsByTagName('p')
// for (const pPadding20px of p_padding_20px) {
//     pPadding20px.style.padding = '20px'
// }
//
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let change_text2 = document.getElementsByClassName('text2')
// console.log(change_text2[0])
// change_text2[0].innerText = 'sep-2021'
//