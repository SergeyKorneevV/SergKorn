// 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого//сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
let sum1 = 0
let sum2 = 0 
function randomInteger(min1, max1) {
    let rand1 = min1 + Math.random() * (max1 + 1 - min1);
    return Math.floor(rand1);
}
for (let i=0; i<3; i++) {
 sum1=sum1+randomInteger(1, 6);
 sum2=sum2+randomInteger(1, 6);
 }
console.log ("Сумма трех бросков первого игрока " + sum1);
console.log ("Сумма трех бросков второго игрока " + sum2);
if (sum1>sum2) {console.log("Выиграл первый игрок!!!")}
    if (sum1<sum2) {console.log("Выиграл второй игрок!!!")}
if (sum1===sum2) {console.log("Ничья!!!")}

// 2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.
let count = 0;
let d_start = new Date(2000,0,1) 
let year= d_start.getFullYear();
while (year<=new Date().getFullYear()) {
    for (let month=0; month<12; month++) {
        let d = new Date(year,month,13);
         if (d>new Date()) break
        if(d.getDay() == 5){
          count++;
       }
    }
    year++
}
console.log ('Пятниц 13-го ' +  count + " шт. по сегодня")

// 3) Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а) числа изначальное число целое, числа разбивки - целые (4,6,5)
let a = 0;
let b = 0;
let c = 0;
function randomInteger(min3, max3) {
    let rand3 = min3 + Math.random() * (max3 + 1 - min3);
    return Math.floor(rand3);
}
while ((a+b+c) != 15) 
{
    a=randomInteger(1, 15);
    b=randomInteger(1, 15);
    c=randomInteger(1, 15);
}
console.log(a, b, c)

// 3) Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
let d = 0;
let e = 0;
let f = 0;
function random2(min, max) {
     let rand = (min + Math.random() * (max + 1 - min)).toFixed(2);
     return rand;
 }
 while ((Number(d) + Number(e) + Number(f)) != 15)
 {
     d=random2(1, 15);
     e=random2(1, 15);
     f=random2(1, 15);
 }
console.log(Number(d), Number(e), Number(f))
