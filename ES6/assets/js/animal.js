//inheretance
class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`${this.name} is an Animal`);
    }
}

class Rabbit extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    run() {
        console.log(`${this.name} runs with speed ${this.speed} m/h`);
    }
}

let animal = new Animal("Rabbit");
animal.print();

let animal1 = new Rabbit("Fast Rabbit", 6);
animal1.run(); 
