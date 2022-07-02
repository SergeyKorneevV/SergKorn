// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandom(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand)*1000;
}
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), getRandom(1, 5))),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), getRandom(1, 5))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), getRandom(1, 5)))
  ]).then(data => {
    console.log(data)
})

// Вариант с async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

async function getPromise () {
let data = await Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), getRandom(1, 5))),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), getRandom(1, 5))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), getRandom(1, 5)))
  ]);
  return data
}
getPromise().then(console.log);

// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будетдожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum() {
    return new Promise((resolve, reject) =>
    setTimeout(
    () => resolve(Math.floor(Math.random() * 5) + 1), 3000));
    }
    async function quare() {
    let number = await getNum();
    return Math.pow(number, 2);
    }
    quare().then(console.log);

// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
// а затем найдет сумму полученных чисел и выводит на экран.
function getNum1() {
    return new Promise((resolve, reject) =>
    setTimeout(() => resolve(getRandom(1, 5)/1000), 3000))
        }   

function getNum2() {
    return new Promise((resolve, reject) =>
    setTimeout(() => resolve(getRandom(6, 10)/1000), 5000))
        }
async function getSum() {
    let num1 = await getNum1();
    let num2 = await getNum2();
    console.log(num1);
    console.log(num2);
    return num1 + num2
    }
getSum().then(console.log);