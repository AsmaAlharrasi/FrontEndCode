class User {
    cnt = 0;
    constructor(name, age, address) {
        this.cnt += 1;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getinfo() {
        console.log(`Hello Mr ${this.name}\nYour ID is ${this.cnt}\nYour age is ${this.age}\nFrom ${this.address}`);
    }

}
let user = new User("Asma", 22, "ALRustaq")
user.getinfo();