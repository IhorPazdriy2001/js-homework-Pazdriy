// // - Дано список імен.
// // let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// console.log(n1.replaceAll('..', ' '));
// console.log(n2.replaceAll('---', ' '));
// console.log(n3.replaceAll('__', ' '));
// console.log('-------------------------------')
// let clearString = (str,symbol) => {
//   let arr = []
//     if(str.includes(symbol)){
//         let x = str.split(symbol)
//         x.forEach((elements)=>{if(elements)arr.push(elements)})
//         console.log(arr.join(' '))
//     }
//
// }
// clearString(n1,"..")
// clearString(n2,"---")
// clearString(n3,'__')

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let array = [];
// let randomNumberInArray = (arr) =>{
//     for (let i = 0; i < 7; i++) {
//         let random = Math.round(Math.random()*100)
//         let result = arr.push(random)
//
//
//     }
//
//     return arr
//
// }
// console.log(randomNumberInArray(array));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort
//
// let EmptyArr = []
// let sortarr = [1,7,9,3,8,4,5,6,223423]
// let srt = sortarr.sort((a,b)=>a-b)
// console.log(srt)
//
// let sortArrayOfRandomNumbers= (arr,lenghtofarray,AmountOfRandom) =>{
//     for (let i = 0; i < lenghtofarray; i++) {
//         let random = Math.round(Math.random()*AmountOfRandom)
//         let push = arr.push(random)
//
//
//     }
//     return arr
// }
// let randomarray = sortArrayOfRandomNumbers(EmptyArr, 5, 1000)
// console.log(randomarray)
// let sort = randomarray.sort((x,y)=>x-y)
// console.log(sort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   відфільтрувати його за допомоги filter, залишивши тільки парні числа
// // let array1 = [40,3,5,7,10,60];
// // let result = array1.filter(num => num%2 === 0)
// // let sort = result.sort((x,y)=>x-y)
// // console.log(sort)
// let array = [];
// let ArrayFilter = (arr) => {
//     for (let i = 0; i < 5; i++) {
//         let random = Math.round(Math.random() * 100)
//         let pusharr = arr.push(random)
//     }
//
//     return arr.filter(num => num % 2 === 0)
// }
// console.log(ArrayFilter(array));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let array = [40,3,5,7,10,60,8,9,1,567,77776656];
// let new_arr = array.map(x=>x.toString())
// console.log(typeof new_arr[0])
// console.log(new_arr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
//
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
// let sortNums=(arr,direction)=>{
//     if (direction === 'ascending'){
//         arr.sort((a,b)=>a-b)
//     }else if (direction === 'descending'){
//         arr.sort((x,y)=>y-x)
//     }
//     return arr
// }
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sortArray = (arr) => {
//     arr.sort((x, y) => y.monthDuration - x.monthDuration)
//     return arr
// }
// console.log(sortArray(coursesAndDurationArray));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterarr = coursesAndDurationArray.filter((elements) => {
//         return elements.monthDuration > 5
//     }
// )
// console.log(filterarr);
