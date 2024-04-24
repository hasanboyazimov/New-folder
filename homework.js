// /*--------------------------- 1 MASHQ ------------------------------*/

// const myArray = [[false, true], [1, 2], 99, 'yaxshi']

// for(let i = 0; i < myArray.length; i++) {
//     if(typeof myArray[i] == 'string') {
//         console.log('String index:', i)
//     }
// }

// // 2-usul
// myArray.forEach((item, i) => {
//     if(typeof item == 'string') {
//         console.log('String index:', i)
//     }
// })


// /*--------------------------- 2 MASHQ ------------------------------*/

// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const newData = []

// data.forEach((item) => {
//     const res = Array.isArray(item)
//     if(res) {
//         item.forEach((num) => {
//         newData.push(num)
//         })
//         }
// })

// console.log(newData)


// /*--------------------------- 3 MASHQ ------------------------------*/

// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((item) => {
//     if(!item) {
//         falsey.push(item)
//     }
// })

// console.log(falsey)


/*--------------------------- 4 MASHQ ------------------------------*/

// 1- usul
// const word = "samarqand"
// let newWord = ''

// const splidWord = word.splid('').reverse()

// for(let i = 0; i<splidWord.length; i++) {
//     newWord += splidWord[i]
// }


// console.log(newWord)



// /*--------------------------- 5 MASHQ ------------------------------*/

// const word  = prompt("biror gap kiriting:")
// const splidWord = word.split('')
// let newWord = ''

// splidWord.forEach((item) => {
//     const boshi = item.charAt().toLocaleLowerCase()
//     const davomi = item.slice(1).toLocaleUpperCase()
//     newWord =" " + boshi + davomi
// })

// console.log(newWord.trim())



/*--------------------------- 6 MASHQ ------------------------------*/


// const nunbers = [1, 3, ,745, -5.5, -6, Infinity, 1, 0.9]

// numbers.forEach((num) => {
//     if(num >= 0.0 && Math.floor(num) === num !== Infinity && num !== 0) {
//         naturalNumber += num
//     }
// })

// console.log(naturalNumber)



/*--------------------------- 7 MASHQ ------------------------------*/

const words = "Qalesz, yaxshimisz ? yaxshimi ishlar"

let splidWord = words.split()
let counter = 0

splidWord.forEach((word) =>{
    if(word  == "a" || word == 'A') {
        counter ++
    }
})

console.log(`Siz so'rayotgan harfd: ${counter} marta ishtirok etgan`)






