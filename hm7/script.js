// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //
// //
// function User() {
//     this.id = 1;
//     this.username = 'Joker';
//     this.usersurname = 'Fleck';
//     this.useremail = 'jokersmile@gmail.com';
//     this.userphone = 23452345234;
//
// }
//
// // let user1 = new User();
// // console.log(user1);
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.username = name;
//     this.usersurname = surname;
//     this.useremail = email;
//     this.userphone = phone;
//
// }
//
// let array = [
//     new User(1, 'Joker', 'Fleck', 'jokersmile@gmail.com', 56756735467),
//     new User(45, 'John', 'Baiden', 'jbaiden@gmail.com', 67867856785678),
//     new User(3, 'Bilie', 'Elish', 'be@gmail.com', 5609978766565),
//     new User(9, 'John', 'Bostord', 'b@gmail.com', 1239978766565),
//     new User(786, 'Katya', 'Holera', 'holere@gmail.com', 380674515986),
//     new User(7, 'Sofia', 'Rotary', 's.rotary@gmail.com', 380966868686),
//     new User(80, 'Victor', 'Klochko', 'lochko@gmail.com', 380962121210),
//     new User(567, 'Natalia', 'Gomez', 'natalia.gm@gmail.com', 380965784758),
//     new User(100, 'Kim', 'Stosa', '34563.gm@gmail.com', 23423462346),
//     new User(909, 'Vanya', 'Keshju', 'vankesh.gm@gmail.com', 9875445654558),
//
// ]
// // console.log(array);
// //     - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterArray = array.filter(x=>x.id % 2 === 0)
// console.log(filterArray)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortId = filterArray.sort((a, b) => a.id - b.id)
// console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client{
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let array2 = [
//     new Client(1,'You','Kidding','Me@20objects.create',101,['nerve','strengthened nerves']),
//     new Client(101,'Victor','Poplavskij','poplavok@rambler.com',1236544788895,['fishing rod','sweets','young girl']),
//     new Client(3,'Vasya','Pypkin','pupkin@gmail.com',855445545444,['bear','snacks','nuts','vodka']),
//     new Client(103,'Kokos','Kokosov','kk@gmail.com',1365987459,['koks','kokos']),
//     new Client(6,'Margarita','Margaritovna','magm@gmail.com',380596321475,['Pizza margarita','Pizza Veterinarian']),
//     new Client(106,'Sonya','Velichko','sonya@gmail.com',380996761475,['note','pencils','book','bag','suit']),
//     new Client(9,'Kolyan','Borzuj','mechanik@gmail.com',380966666666,['white paint','piston','oil filter','oil','set of tools','front bumper']),
//     new Client(909, 'Vanya', 'Keshju', 'vankesh.gm@gmail.com', 9875445654558,['nuts']),
//     new Client(12, 'Sofia', 'Rotary', 's.rotary@gmail.com', 380966868686,['microphone','hearing']),
//     new Client(1212, 'Victor', 'Klochko', 'lochko@gmail.com', 380962121210,['sdfgsdfg','dfghd','dfghdfgh','dfghdfghdfgh','asdasdfas','aqwerqx','qwerty'])
//
// ]
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortArr = array2.sort((a,b)=>a.order.length-b.order.length)
// console.log(sortArr);
