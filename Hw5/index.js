console.log ('Задание 1 - сложение')

let a1 ="ABC"
let b1 = false
console.log (a1+b1) // string + boolean

let a2 ="ABC"
let b2 = 1
console.log (a2+b2) // string + number

let a3 = 25
let b3 = true
console.log (a3+b3) // number + boolean

let a4 = 250
let b4 = false
console.log (a4+b4) // number + boolean

console.log ('Задание 2 - умножение')

let c1 ="ABC"
let d1 = false
console.log (c1*d1) // string * boolean

let c2 ="ABC"
let d2 = 1
console.log (c2*d2) // string * number

let c3 = 2
let d3 = true
console.log (c3*d3) // number * boolean

console.log ('Задание 3 - деление')

let e1 ="ABC"
let f1 = true
console.log (e1/f1) // string / boolean

let e2 ="ABC"
let f2 = 1
console.log (e2/f2) // string / number

let e3 = 2
let f3 = false
console.log (e3/f3) // number / boolean

console.log ('Задание 4 - явное преобразование')

console.log ( Number('10') + Number('20') ) // 30 (Явное преобразование number)

console.log (String('Hello ') + String('world') + String('!!!')) // (Явное преобразование String)

console.log (Boolean(false) + Boolean(NaN)) // (Явное преобразование Boolean)