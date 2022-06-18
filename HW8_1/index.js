// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let  massiv = [1, 2, 3, 4, 5, 6]
function newReverse (x){
   let a = []
   for (i = 0; i < x.length; i++)
   {
      a[i] = x[(x.length - 1) - i]
   }
   return a
}
console.log(Object.values(newReverse(massiv)))

// 2) найти максимальное значение числа в массиве
let  arr = [67, 4, 1, 8, 28, 11, 23]
 function max(prev, next) {
    return Math.max(prev, next)
}
console.log(arr.reduce(max))

// 3)записать в массив ряд фибаначи начиная с N члена с длинной массива M
function fib(n,m) {
   let a = 1
   let b = 1
   let j = 0
   let fiban = [1,1]
   for (let i = 3; i <= m+n-1; i++) {
     let c = a + b
     a = b
     b = c
  fiban.push(b)
  }
 fiban.splice(0, n-1)
 return fiban
 }
console.log (Object.values(fib(8,5)))

//  4) даны 2 4-хзначных числа с неповторяющимися цифрами, 
// надо определить сколько цифр в этих числах совпадают по значению и позиции
//  и сколько только по значению (3487 и 3794 ---> 1 и 3 ) 
function findPos (vol1, vol2) {
   let count1= 0
   let count2= 0
   let arr1 = Array.from('' + vol1)
   let arr2 = Array.from('' + vol2)
   for (i = 0; i < 4; i++){
    if (arr1[i] == arr2[i])
    	count1 ++
  } 
  for (j = 0 ; j < 4; j++)
   for (z = 0; z < 4; z++)
      if(arr1[j] == arr2[z])
   count2++
 return [count1, count2]}
console.log (findPos(1234, 1235))

// 5) сортировка массива по возрастанию/убыванию
let arrNumbers = new Array (50,4,1,76,20,3,27,5,501);
function compareNumbers(n1,n2)
{
  if (n1==n2) return 0
  if (n1>n2)
    return 1
  else 
    return -1
}
console.log(arrNumbers.sort(compareNumbers))

// 6) удалить из массива все повторяющиеся элементы
function arrayUnique(arr){
    return arr.filter((e,i,a)=>a.indexOf(e)==i)
}
console.info(arrayUnique([1, 2, 1, 10, 5, 3, 4, 40, 50]))  // -> [1, 2, 10, 5, 3, 4, 40, 50]
console.info(arrayUnique([1, 2, 3, 1, 2, 33, 33, 55, 66])) // -> [1, 2, 3, 33, 55, 66]
console.info(arrayUnique(['privet', 'privet', 'kakdela'])) // -> ["privet", "kakdela"]