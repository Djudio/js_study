// //task 1 
// let textMassive = ["Привет ", "мир ", " !"]
// let text = textMassive[0] + textMassive[1] + textMassive[2]
// alert(text)

//task 2
// let helloWorld =["Привет ", "мир ", " !"]
// alert(helloWorld [0] = "Пока " + helloWorld [1] + helloWorld [2])


//task 3
// let arr = ["1","2","3","4","5"]
// alert(arr)

// let arr = ["1","2","3","4","5"]
// alert(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])

//task 4 
// let arr =  ["a", "b", "c"]
// console.log(arr);

//task 5 
// let arr = ["a", "b", "c"]
// alert(arr [0]) 
// alert(arr [1]) 
// alert(arr [2]) 

// task 6 
// let arr = ["a", "b", "c", 'd']
// alert(arr[0] + "+" + arr[1] + ", " +  arr[2] + "+" + arr[3])

// // Task 7 
// let arr =["2","5","3","9"]
// let firstStep = arr[0] * arr[1]
// let secondStep= arr[2] * arr[3]
// let result=firstStep+secondStep
// alert(result)

// Task 8 
// let arr = [
//     ["1","2","3"],
//     ["4","5","6"],
//     ["7","8","9"]
// ]

// alert(arr[1][0])

// Task 9 
let arr = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
]

// alert(arr[0][1] + arr[1][0] + arr[1][2]+ arr[2][1]) //но если матрица большая то так не сделашешь

for (let index = 0; index < arr.length; index++) {
    alert(arr);
}

//index=0 - переменная (счетчик) начинаем с 0
//index/length - размер не больше длины массива 
//index++ - ? 



// 2 задание оп массивам
//Task1
// let arr = ['1','2','3','4','5','6','7','8','9']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//Task2 
// let arr = ['1','2','3','4','5','6','7','8','9']
// arr.push('10')
// console.log(arr)

//Task3 - ???
// let arr = ['1','2','3','4','5','6','7','8','9']
// for (let i = 9 ; i > -1;  i--) {
//     console.log(arr[i]);
// }

//Task 4 
// let arr = [
//     ["1","2","3"],
//     ["4","5","6"],
//     ["7","8","9"]
// ]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }  
// }

// Task 7
// let arr = [
//     ["1","2","3"],
//     ["4","5","6"],
//     ["7","8","9"]
// ]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]*2);
//     }  
// }

//Task 6
// let arr = [
//     ["1","2","3"],
//     ["4","5","6"],
//     ["7","8","9"]
// ]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] % 2 == 0) {
//             console.log(arr[i][j]);
//         }
//     }  
// }

//Task 7
// let arr = ['1','2','3','4','5','6','7','8','9']
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr.splice(0,9)[index]);
// }

//Task 8 
let arr = Number(['1','2','3','4','5','6','7','8','9'])
let sum = 0
for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    console.log(sum);
}

