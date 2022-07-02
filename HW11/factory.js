// 5.	Таксопарк. Определить иерархию легковых автомобилей. Создать таксопарк. 
// Посчитать стоимость автопарка. Провести сортировку автомобилей парка по расходу топлива. 
// Найти автомобиль в компании, соответствующий заданному диапазону параметров.
// Паттерн - Factory

class car {
    constructor(name, price, fuel, color) {
        this.name = name,
        this.price = price,
        this.fuel = fuel;
        this.color = color;
    }
} 
class carPark {
    createCar(name) {
        if(name.toLowerCase() === 'bmw') {
            return new car(name, 2000, 6, 'Black')
        } 
        if(name.toLowerCase() === 'toyota') {
            return new car(name, 4000, 12, 'Red')
        } 
        if(name.toLowerCase() === 'nissan') {
            return new car(name, 4500, 7, 'White')
        } 
        if(name.toLowerCase() === 'ford') {
            return new car(name, 3000, 9, 'White')
        }
}
}
const park = new carPark();
const bmw = park.createCar('BMW');
const toyota = park.createCar('Toyota');
const nissan = park.createCar('Nissan');
const ford = park.createCar('Ford');
class Calculate extends carPark {
    constructor() {
        super();
        this.cars = [];
    }
    add(part) {
        this.cars.push(part);
    }
    getPrice() {
        return this.cars
            .map(part => part.price)
            .reduce((a, b) => a + b)
            }
    getSort() {
        return this.cars
           .sort(function (a, b) {
                if (a.fuel > b.fuel) {
                  return 1;
                }
                if (a.fuel < b.fuel) {
                return -1;
                }
                return 0;
          });  
    };
    getFindColor() {
        return this.cars
            .filter(item => item.color === 'White')
    }
    getFindPrice() {
        return this.cars
            .filter(item => item.price >= 3000 && item.price <4500)
    }
}
class Carw extends Calculate {
    constructor() {
        super();
        
    }
}
let carw = new Carw();
carw.add(park.createCar('bmw'));
carw.add(park.createCar('nissan'));
carw.add(park.createCar('toyota'));
carw.add(park.createCar('ford'));
console.log(carw)
console.log('Стоимость автопарка составляет: '+ carw.getPrice())
console.log('Сортировка автопарка по расходу топлива:')
console.log(carw.getSort())
console.log(carw.getFindColor())
console.log(carw.getFindPrice())