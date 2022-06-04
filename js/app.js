// let phones = ['Samsung', 'Oppo', 'Xiaomi', 'Vivo']
//
// phones[Math.floor((phones.length - 1)/2)] ='BBK'
// console.log(phones)

//
// phones[2] = 'Sony'
// phones[4] = 'Smartisan'
// phones[6] = 'OnePlus'
// console.log(phones)
// alert(phones)
// alert(phones.length)

// let phones2 = [ 'Samsung', { phone: 'Oppo ' }, true, function() { return('Realme');} ]
// alert(phones2[1].phone)
// alert(phones2[3]())
// alert(phones[phones.length - 1])
// alert(phones.at(-3))
// alert(phones.pop())
// alert(phones)
// phones.push('Vivo')
// alert(phones)
// alert(phones.shift())
// alert(phones)
// phones.unshift('Samsung')
// alert(phones)

// let phones2 = ['Smartisan', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo']
// let phones2 = ['Oppo',]
// // phones2.push('Smartisan', 'Samsung')
// // phones2.unshift('Xiaomi', 'Vivo')
// // console.log(phones2)
// let arr = phones2
// console.log(arr)
// alert(arr === phones2)
//  let phones3 = []
// phones3[99999] = 5
// phones3.age = 25
// console.log(phones3)

// let phones4 = ['Smartisan', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo']
// for (let i = 0; i < phones4.length; i++) {
//     alert(phones4[i])
// }

// let phones5 = ['Smartisan', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo']
// for (let phone of phones5) {
//     alert( phone );
// }

// let phones6 = ['Smartisan', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo']
// for (let key in phones6) {
//     alert( phones6[key]);
// }

// //Уменьшаем массив
// let phones7 = ['Smartisan', 'Samsung', 'Oppo', 'Xiaomi', 'Vivo']
// phones7.length = 3
// alert(phones7)
//
// //Увеличиваем массив
// phones7.length = 5
// alert(phones7[3]) // значение будет undefined, так как увеличить массив невозможно
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//
// alert( matrix[1][1] ); // 5, центральный элемент
// alert(String(phones) === 'Samsung,Oppo,Xiaomi,Vivo')
// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"
//  let styles = ['Джаз', 'Блюз',]
// styles.push('Рок-н-ролл')
// styles[1] = 'Классика'
// alert(styles.shift())
// styles.unshift('Рэп', 'Рэгги')
// console.log(styles)


// let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// });
//
// arr[2]()
// console.log(arr);

// let arr = ["a", "b", function() {
//     alert( this );
// }];
//
// arr[2]()

// let mass = [-1, -2, -4, 1, 5, 6, 8]
//
// for (let i = 0; i < mass.length; i++){
//     if (mass[i] % 2 === 0){
//        alert(mass[i])
//     }
// }


// const filterNum = mass.filter(num => num > 0)
// console.log(filterNum)



// let shorrts = phones2[0].length
//     for (let i = 0; i < phones2.length; i++) {
//         if (phones2[i].length < shorrts) {
//             alert(phones2[i]);
//         }
//     }

// const sortAB = arr.sort((a, b) => a.length - b.length)
// console.log(sortAB)
// const shorty = sortAB.filter(num => x == 0 ? x=num.length : num.length==x, x = 0)
// alert(shorty)

// const arr = ['Hi', 'Hello','Good Morning!',];
// let minArr = arr[0];
// for (let i = arr.length - 1; i >= 0; i--){
//     if (arr[i] > minArr){
//         minArr = arr[i]
//     }
// }
// console.log(minArr)

// const fib = [1, 1, 2, 34, 5, 7, 8, 9, 51]
//
// const pow2 = num => Math.pow(num, 2)
// const pow2fib = fib.map(pow2)
// const filterNum = pow2fib.filter(num => num > 20)
// console.log(pow2fib)
// console.log(filterNum)

// const phones = ['Samsung', 'Apple', 'Xiaomi', 'Vivo', 'Oppo', 'Smartisan', 'BBK', 'Car', 'Sharp', 'Sony',]
// const returnMinStr = () => {
//     const newArr = []
//     let resultNum
//     for(let i =0; i < phones.length; i++) {
//         newArr.push(phones[i].length)
//     }
//     for(let i = 0; i < phones.length; i++){
//         resultNum = Math.min(...newArr)
//         if(resultNum === phones[i].length){
//             console.log(phones[i])
//         }
//     }
// }
// returnMinStr()
//
// const truncate = (str, num) => {
//     const numb = `${str.slice(-num)}...`
//     return numb
// }
// console.log(truncate('Smartisan', 3))
//
//
// let name = ['April', 'May', 'October', 'December', 'January', 'February', 'November']
//
// let arr = name[0];
//
// for (let i = 0; i < name.length; i++){
//     if (name[i].length > arr.length) {
//         arr = name[i]
//     }
// }
// console.log(arr)
// const getHiddenCard = (cardNumber, starsCount = 4) => {
//     const visibleDigitsLine = cardNumber.slice(12);
//     return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
// };
// console.log(getHiddenCard('1234567891002345'))
// isLeapYear = (numb) => numb % 400 === 0 || (numb % 4 === 0 && numb % 100 !== 0)
// console.log(isLeapYear(23))

// const sortAB = arr.sort((a, b) => a - b)
// console.log(sortAB)
// const shorty = sortAB.filter(num => {
//
//     if(x === 0) {
//         x = num.length
//     }
//     return num.length = x
//
// }, x= 0)
// alert(shorty)

// const arr = [5, -1, 3, 9, -18, -18, 44]
//
// const ressU = () => {
//     let res = arr[0]
//
//     for (i = 0; i < arr.length; i++) {
//         if (res > arr[i]) {
//             res = arr[i]
//         }
//     }
//     return res
// }
// console.log(ressU())




// // const sortAB = arr.sort((a, b) => a.length - b.length)
// let res = Math.min(...arr);
//
// console.log(res)
//
// const pow = (a, b) => {
//     const res = a ** b
//     return res
// }
// console.log(pow(2, 3))
// console.log(2 || 1);

// const Aus = 'Street'
// console.log(Aus)
// console.log(0 && 'Street');
// let x = 5;
// console.log(++x); // => 6
// console.log(x);   // => 6
//
// console.log(x++); // => 6
// console.log(x);   // => 7
// const mass = ['-1', '3', '5',]
//
// const res = () => {
//
//     for(i = 0; i < mass.length; i++) {
//         let num;
//         if(i < mass.length){
//             num = mass[i]*(-1)
//         }
//     }
//     return num
// }
// console.log(res())

const colors = ['-1', '4', '-3'];

const resum = (num) => {
	return (-1) * num
}
const ress = colors.map(resum)
console.log(ress)









