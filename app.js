// misol - if1
// let number = 5

// if(number >= 0) {
//     number+= 1
// }

// console.log(number)

//misol - if2
// let number = 0

// if(number >= 0) {
//     number += 1
// }

// else {
//     number -= 2
// }

// console.log(number)

//misol - if3
// let number = 0;

// if (number = 0) {
//   number = 10;
// } else {
//   if (number > 0) {
//     number += 1;
//   } else {
//     number -= 2;
//   }
// }

// console.log(number);


//misol - if4
// const numbers = [-1, 4, 7]
// let counter = 0

// numbers.forEach((number) => {
//     if (number >= 0) {
//         counter += 1
//     }
// })

// console.log(counter)


//misol - if5
// const numbers = [-1, 4, 7]
// let positiv = 0
// let negativ = 0

// numbers.forEach((number) => {
//     if (number >= 0) {
//         positiv += 1
//     } else {
//         negativ += 1
//     }
// })

// console.log(`musbat sonlar ${positiv} ta, manfiy sonlar ${negativ} ta`)

//misol - if6
// const a = -10
// const b = -1

// if(a > b) {
//     console.log(` ${a} ${b} dan katta`)
// } else if(b > a) {
//     console.log(` ${b} ${a} dan katta`)
// } else {
//     console.log(`${a} ${b} ga temg`)
// }

//misol - if7
// const numbers = [12, -24]

// if(numbers[0] > numbers[1]) {
//     console.log("1")
// } else {
//     console.log('2')
// }


//misol - if8
// const a = 5 
// const b = 10

// if(a > b) {
//     console.log(a, b)
// } else {
//     console.log(b, a)
// }


//misol - if9
// let a = 5
// let b = -10

// if(a < b) {
//     console.log(`a=${a}, b=${b}`)
// } else {
//     console.log(`a=${b}, b=${a}`)
// }


//misol - if10
// let a = 5
// let b = 10

// if(a === b) {
//     a = 0
//     b = 0
// } else {
//     a = a + b
//     b = a 
// }

// console.log(`a=${a}, b=${b}`)


//misol - if11
// let a = 5
// let b = 10

// if(a === b) {
//     a = 0
//     b = 0
// } else if(a > b) {
//     b = a 
// } else if (b > a) {
//     a = b
// }

// console.log(`a=${a}, b=${b}`)


//misol - if12 
// let num1 = prompt("birinchi sonni kiriting: ")
// let num2 = prompt("ikkinchi sonni kiriting: ")
// let num3 = prompt("uchinchi sonni kiriting: ")

// let minNumber = Math.min(num1, num2, num3)
// alert(minNumber)

//misol - if13
// let num1 = prompt("Биринчи сонни киритинг:");
// let num2 = prompt("Иккинчи сонни киритинг:");
// let num3 = prompt("Учинчи сонни киритинг:");

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// let middleNumber = numbers[1];

// alert(`Ўртадаги сон: ${middleNumber}`);

//misol - if14
// let num1 = prompt("Биринчи сонни киритинг:");
// let num2 = prompt("Иккинчи сонни киритинг:");
// let num3 = prompt("Учинчи сонни киритинг:");

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// let smallNumber = numbers[0];
// let bigNumber = numbers[2]

// alert(`kichik raqam ${smallNumber}, katta raqam ${bigNumber}`);


//misol - if15
// let num1 = prompt("Биринчи сонни киритинг:");
// let num2 = prompt("Иккинчи сонни киритинг:");
// let num3 = prompt("Учинчи сонни киритинг:");

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);


// alert(`yig'indisi eng katta boladigan sonlar: ${numbers[1]}, ${numbers[2]}`);

// ***************************************************************************************************************

//misol - boolean1

// const a = 5

// if(a >= 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }


//misol - boolean2
// const a = 1
// let result = a % 2 
// if(result == 0) {
//     console.log(false)
// } else 
//     console.log(true)


//misol - boolean3
// const a = 1
// let result = a % 2 
// if(result == 0) {
//     console.log(true)
// } else 
//     console.log(false)


 //misol - boolean4
// const a = 5 
// const b = 4

// if(a > 2 && b <= 3) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean5
// const a = 5 
// const b = 4

// if(a >= 0 && b < -2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

//misol - boolean6
// const a = 5 
// const b = 10
// const c = 10

// if(a <=b && b <= c) {
//     console.log(true)
// } else {
//     console.log(false)
// }

//misol - boolean7
// const a = 5 
// const b = 2
// const c = 10

// if(a > b && a < c) {
//     console.log(true)
// } else {
//     console.log(false)
// }

//misol - boolean8
// const a = 5 
// const b = 3

// if(a % 2 == 0 || b % 2 == 0) {
//     console.log(false)
// } else {
//     console.log(true)
// }

//misol - boolean9
// const a = 5
// const b = 4

// if(a % 2 == 0 && b % 2 == 0) {
//     console.log(false)
// } else {
//     console.log(true)
// }


//misol - boolean10
// const a = 4
// const b = 10

// if(a % 2 == 0 && b % 2 == 1 ||a % 2 == 1 && b % 2 == 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean11
// const a = 3
// const b = 16

// if(a % 2 == 0 && b % 2 == 0 || a % 2 == 1 && b % 2 == 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean12
// const a = 3
// const b = 16
// const c = -1

// if(a >= 0 && b >= 0 && c >= 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean13
// const a = -3
// const b = -16
// const c = -1

// if(a >= 0 || b >= 0 || c >= 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }




//misol - boolean14
// const a = 3
// const b = -16
// const c = -1

// if(a >= 0 && b,c < 0 || b >= 0 && a,c < 0 || c >= 0 && a,b < 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean15 
// const num1 = 3
// const num2 = 16
// const num3 = -1


//  let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);
// console.log(numbers)

// if(numbers[0] < 0 && numbers[1] >= 0 && numbers[2] >= 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean16
// const num = 51
// if(num >= 10 && num <= 99 && num % 2 == 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean17
// const num = 511
// if(num >= 100 && num <= 999 && num % 2 == 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }



 //misol - boolean18
// const num1 = 3
// const num2 = 16
// const num3 = -1

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// if(numbers[0] == numbers[1] || numbers[1] == numbers[2] || numbers[0] == numbers[2]) {
//     console.log( true)
// } else {
//     console.log(false)
// }



//misol - boolean19
// const num1 = 12
// const num2 = 16
// const num3 = -1

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// if(numbers[0] + numbers[1] == 0 || numbers[1] + numbers[2] == 0 || numbers[0] + numbers[2] == 0) {
//     console.log( true)
// } else {
//     console.log(false)
// }


//misol - boolean20
// const num = 343
// let raqamlar = String(num).split('')

// if(raqamlar[0] == raqamlar [1] || raqamlar[1] == raqamlar[2] || raqamlar[0] == raqamlar[2]) {
//     console.log(false)
// } else {
//     console.log(true)
// }



//misol - boolean21
// const num = 321
// let raqamlar = String(num).split('')

// if(raqamlar[0] < raqamlar [1] && raqamlar[1] < raqamlar[2] ) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean22
// const num = 321
// let raqamlar = String(num).split('')

// if(raqamlar[0] < raqamlar [1] && raqamlar[1] < raqamlar[2] ||  raqamlar[0] > raqamlar [1] && raqamlar[1] > raqamlar[2]) {
//     console.log(true)
// } else {
//     console.log(false)
// }



//misol - boolean23
// const num = 321
// let raqamlar = String(num).split('')

// if(raqamlar[0] == raqamlar [1] && raqamlar[1] == raqamlar[2]) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// const raqam = prompt("raqamni kiriting")

// for( let i = 1; i < 10; i++) {
//     console.log(` ${raqam} * ${i} = ${raqam * i }`)
// }


// const a = Number( prompt(" 1- raqamni kiriting: "))
// const belgi = prompt("belgini kiriting: ")
// const b = Number(prompt(" 2- raqamni kiriting: "))

// if (belgi == "+") {
//     alert(`javob: ${a + b}`)
// } else if (belgi == "-") {
//     alert(`javob: ${a - b}`)
// } else if (belgi == "*") {
//     alert(`javob: ${a * b}`)
// } else if (belgi == "/" || belgi == ":") {
//     alert(`javob: ${a / b}`)
// } else {
//     alert("Error: Xato belgi yoli raqam kiritingiz!")
// }


// let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. !!!!!!!!!! Expedita temporibus veniam vitae, labore impedit  !!!!!!!!!!magni consequatur voluptas dolor? Repudiandae perspiciatis cum eaque iure eligendi nobis ipsam iste dolorum. Itaque, rem!"
// let newText = ''

// for(let i = 0; i < text.length; i++) {
//     if(text[i] != "!") {
//        newText += text[i]
//     }
// }

// console.log(newText)




















