// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Aboutcar(car,model,producer,year,maxspeed,enginecapacity){
//     this.car=car;
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.enginecapacity= enginecapacity;
//     this.drive = function (){
//         console.log(`We drive with ${this.maxspeed} km/h speed `)
//     }
//     this.info = function (){
//         console.log(`The car is ${this.car}, model is ${this.model}`)
//     }
//     // debugger;
//     this.increaseMaxSpeed = function (newSpeed){
//         console.log(`Now your max speed = ${this.maxspeed = this.maxspeed + newSpeed}`);
//
//     }
//     this.changeYear = function (newValue){
//         console.log(`Know year of your car = ${this.year = this.year + newValue}`);
//     }
//     this.addDriver = function (driver){
//         this.driver=driver
//         console.log(`the driver are ${driver}`)
//     }
// }
//
// let newcar1 = new Aboutcar('bmw', '320d', 'Germany', 2007, 270, 2.0)
// console.log(newcar1)
// newcar1.drive()
// newcar1.info()
// newcar1.increaseMaxSpeed(25)
// newcar1.changeYear(10)
// newcar1.addDriver("Shymaher")

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Aboutcar {
//
//     constructor(car, model, producer, year, maxspeed, Capacity) {
//         this.car = car;
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.Capacity = Capacity;
//
//     }
//
//     drive() {
//         return console.log(`Our max speed is ${this.maxspeed} km/h`)
//     }
//
//     info() {
//         for (const key in this) {
//             console.log(`${key} = ${this[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxspeed = newSpeed+this.maxspeed
//     }
//
//     changeYear(newValue){
//         this.year = this.year + newValue
//     }
//     addDriver(driver){
//         this.driver = driver
//     }
//
// }
//
// let car2 = new Aboutcar('BA3', 2107, 'Ukraine', 2012, 200, 5.5)
// console.log(car2);
// car2.drive()
// car2.info()
// car2.increaseMaxSpeed(-70)
// car2.changeYear(-12)
// car2.addDriver("Petro")

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Popeslushka {
//
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
// }
//
// let tenPopeslushok = [
//     new Popeslushka('kira', 62, 35),
//     new Popeslushka('Sveta', 18, 55),
//     new Popeslushka('Karmelita', 45, 43),
//     new Popeslushka('Anabel', 24, 38),
//     new Popeslushka('Fiona', 30, 40),
//     new Popeslushka('Violeta', 34, 34),
//     new Popeslushka('Germiona', 20, 36),
//     new Popeslushka('Augistina', 89, 34),
//     new Popeslushka('Simona', 43, 41),
//     new Popeslushka('Angelina', 17, 32)
// ]
//
//
// class Prince {
//
//     constructor(name, age, Valjanok) {
//         this.name = name;
//         this.age = age;
//         this.Valjanok = Valjanok;
//     }
// }
//
// let prince = new Prince("Vyjko Jarik", 94, 34)
// console.log(prince)
//
// let wecanfound = (tenPopeslushok, prince) => {
//     for (const element of tenPopeslushok) {
//         if (element.size === prince.Valjanok && element.age >= 80) {
//             return `Baba was found ${element.name}`
//         }
//     }
// }
//
//
// console.log(wecanfound(tenPopeslushok, prince));
//
// let findMethod = tenPopeslushok.find((elements) => elements.size === prince.Valjanok && elements.age >= 80)
// console.log(findMethod);
