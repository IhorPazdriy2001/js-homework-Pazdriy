// // - створити блок,
// let creatediv = document.createElement('div')
// // - додати цей блок в body.
// creatediv.innerText = "New div"
// document.body.appendChild(creatediv)
// // - додати йому класи wrap, collapse, alpha, beta
// creatediv.classList.add("wrap","collapse","alpha","beta")
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// creatediv.style.background = 'gold'
// creatediv.style.color = 'darkgreen'
// creatediv.style.width = '400px'
// creatediv.style.height = '200px'
// creatediv.style.textAlign = "center"
// creatediv.style.fontSize = '50px'
// creatediv.style.margin = '30px'
// // - клонувати його повністю, та додати клон в body.
// let divclone = creatediv.cloneNode(true)
// document.body.appendChild(divclone)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює
// li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let arr = ['Main','Products','About us','Contacts']
// for (let elementarr of arr){
//     let arrays = document.getElementsByClassName('menu')[0]
//     let li = document.createElement('li')
//     arrays.appendChild(li).innerText = `${elementarr}`
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const Element of coursesAndDurationArray) {
//      // let createDiv = document.createElement('div').innerText = `${Element.title} - ${Element.monthDuration} | `
//      // document.body.append(createDiv)
//     let createDiv = document.createElement('div')
//     createDiv.innerText = `${Element.title} - ${Element.monthDuration}`
//     document.body.appendChild(createDiv)
//     createDiv.style.border = '2px solid red'
//     createDiv.style.width = '300px'
//     createDiv.style.height = '50px'
//     createDiv.style.margin = '5px'
//     createDiv.style.display = 'flex'
//     createDiv.style.justifyContent = 'center'
//     createDiv.style.alignItems = 'center'
//     createDiv.style.borderRadius = '20px'
//     createDiv.style.background = '#fbfcea'
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const Element of coursesAndDurationArray) {
//
//     let createDiv = document.createElement('div')
//     document.body.appendChild(createDiv)
//
//     let createH1 = document.createElement('h1')
//     createH1.innerText = `${Element.title}`
//     createDiv.appendChild(createH1)
//
//     let createP = document.createElement('p')
//     createP.innerText = `${Element.monthDuration}`
//     createDiv.appendChild(createP)
//
//     createDiv.classList.add('item')
//     createH1.classList.add('heading')
//     createP.classList.add('description')
//
// }