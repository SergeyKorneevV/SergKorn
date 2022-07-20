// 5.	Таксопарк. Определить иерархию легковых автомобилей. Создать таксопарк. 
// Посчитать стоимость автопарка. Провести сортировку автомобилей парка по расходу топлива. 
// Найти автомобиль в компании, соответствующий заданному диапазону параметров.
// Паттерн - composite

class carPark {
    getPrice() {
        return this.price || 0;
    }
    getName() {
        return this.name;
    }
    getFuel() {
        return this.fuel;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }

    setPrice(price) {
        this.price = price;
    }
    setName(name) {
        this.name = name;
    }
    setFuel(fuel) {
        this.fuel = fuel;
    }
    setYear(year) {
        this.year = year;
    }
    setColor(color) {
        this.color = color;
    }
}
class car1 extends carPark {
    constructor() {
        super();
        this.setName('VW');
        this.setPrice(1000);
        this.setFuel(7);
        this.setColor('Black')
    }
}
class car2 extends carPark {
    constructor() {
        super();
        this.setName('Ford');
        this.setPrice(2000);
        this.setFuel(6);
        this.setColor('White')
    }
}
class car3 extends carPark {
    constructor() {
        super();
        this.setName('Lada');
        this.setPrice(500);
        this.setFuel(11);
        this.setColor('Red')
    }
}
class car4 extends carPark {
    constructor() {
        super();
        this.setName('Audi');
        this.setPrice(2000);
        this.setFuel(10);
        this.setColor('Black')
    }
}
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
            .map(part => part.getPrice())
            .reduce((a, b) => a + b)
    };
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
            .filter(item => item.color === 'Black')
    }
    getFindPrice() {
        return this.cars
            .filter(item => item.price >= 200 && item.price <2000)
    }
}
class Car extends Calculate {
    constructor() {
        super();
        this.setName('My taxipark');
    }
}
let car = new Car();
car.add(new car1());
car.add(new car2());
car.add(new car3());
car.add(new car4());
car.add(new car4());
console.log(car)
console.log(`${car.getName()} price is ${car.getPrice()}`)
console.log('Сортировка автопарка по расходу топлива:')
console.log(car.getSort())
console.log(car.getFindColor())
console.log(car.getFindPrice())