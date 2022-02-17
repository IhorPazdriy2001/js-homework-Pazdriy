
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

