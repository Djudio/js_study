// //Task 1
// let output
// const taskUserName = Number(prompt("сколько пользователю лет?"))

// if (taskUserName > 18 && taskUserName <= 25) {
//     output = "ого круто вся жизнь впереди"
// }
// else if (taskUserName > 25 && taskUserName <= 35) {
//     output = "не тупи"
// }
// else if (taskUserName > 35 && taskUserName <= 70) {
//     output = "по немного сыпимся"
// }
// else if (taskUserName >= 70) {
//     output = "ебать ты дед"
// }

// console.log(output);


// //Task 2
// const userAge = prompt ("сколько вам лет?")
// const userSurname = prompt ("ваша фамилия?")
// const userName = prompt ("ваше имя?")
// const userAct = prompt ("чем занимаетесь?")

// let output = ` Привет, меня зовут ${userName} ${userSurname} мой возраст - ${userAge} и я занимаюсь ${userAct}` 

// console.log(output);

//Task 3
let output
const askUser =Number(prompt ("какое число?"))

if ((askUser >= 18 && askUser < 20) || (askUser >= 22 && askUser < 25)) {
    output = askUser ** 2
} 
else if (askUser === 21) {
    output = "ОЧКО"
} 
else if (askUser >= 25 && askUser <= 100) {
    output = askUser * 2 
}

console.log(output);


